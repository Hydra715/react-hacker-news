import { useEffect } from 'react';
import { Item } from '../../models/item';
import { RedoOutlined } from '@ant-design/icons';
import { useLazyGetStoriesIdsQuery } from '../../store/api/story.api';
import { StoryShort } from '../story/story-short';
import { useInterval } from '../../hooks/interval';
import { Button, Layout, List, PageHeader } from 'antd';
import { Content, Header, Footer } from 'antd/lib/layout/layout';


export const StoryList = () => {

  const [seconds, reset] = useInterval(20000)
  const [fetch, { data }] = useLazyGetStoriesIdsQuery();

  useEffect(() => {
    fetch()
    console.log('reloaded');
  }, [seconds, fetch])

  const reload = () => {
    reset()
  }

  return (
    <>
      <Layout>
        <PageHeader
          className="site-page-header"
          title="Hacker news"
          extra={[
            <Button key="1" type="primary" onClick={() => reload()}>
              <RedoOutlined />
              Reload
            </Button>,
          ]}
        />

        <Content>
          <List
            itemLayout="vertical"
          >
            {data && data.map((item: Item) => (
              <StoryShort story={item} key={item.id} />
            ))}
          </List>
        </Content>
      </Layout>

    </>
  )
}