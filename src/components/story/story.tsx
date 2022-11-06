import { useEffect, useState } from 'react';
import { useLazyGetItemQuery } from '../../store/api/story.api';
import { useInterval } from '../../hooks/interval';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/index';
import { CommentList } from '../comment/comment-list';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import { RedoOutlined } from '@ant-design/icons';
import { Layout, PageHeader, List, Button, Card } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import { Item } from '../../models/item';
import { StoryShort } from './story-short';
import { store } from '../../store/index';


export const Story = () => {
  const location = useSelector((state: RootState) => state.router.location);
  const [id, setId] = useState<number>();
  const [fetchStory, { data, error: LoadError }] = useLazyGetItemQuery()

  const [seconds, reset] = useInterval(20000)

  useEffect(() => {
    if (location.pathname === '/item' && location.query.story) {
      setId(+location.query.story)
    } else {
      store.dispatch(push('/404'))
    }
  }, [location]);

  useEffect(() => {
    if (id) {
      fetchStory({ id })
    }
  }, [seconds, fetchStory, id])

  useEffect(() => {
    if (LoadError) {
      console.warn('404')
      store.dispatch(push('/404'))
    }
  }, [LoadError])

  const back = () => {
    store.dispatch(push('/'))
  }



  const reload = () => {
    reset()
  }

  return (
    <>
      <Layout>
        <PageHeader
          className="comment-page-header"
          title={data && data?.title}
          onBack={() => back()}
          extra={[
            <Button key="1" type="primary" onClick={() => reload()}>
              <RedoOutlined />
              Reload
            </Button>,
          ]}
        />

        <Content>
          <Card>
            <a href={data?.url}>Link to source</a>
            <p>{data?.humTime} by {data?.by} || comments: {data?.kids?.length || '0'}</p>
          </Card>
          
            {data?.kids?.length &&
              <CommentList commentIds={data?.kids}></CommentList>}
        </Content>

      </Layout> 
    </>
  )
}