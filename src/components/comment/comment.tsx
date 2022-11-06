import { Item } from "../../models/item"
import { CommentList } from './comment-list';
import { useGetItemQuery } from '../../store/api/story.api';
import { useEffect, useState } from "react";
import { Collapse, Skeleton, List, Card } from "antd";

const { Panel } = Collapse;

export interface CommentProps {
  commentId: Item['id']
}

export function Comment({ commentId }: CommentProps) {
  const { data, isLoading } = useGetItemQuery({ id: commentId })
  const [details, setDetails] = useState(false)

  useEffect(() => { }, [])

  const toggteDetails = (e: any) => {
    console.warn(e)
    setDetails(() => !details)
  }

  return (
    <>
      <Card>
        <p dangerouslySetInnerHTML={data?.innerHtmlText}></p>
      </Card>
      {
        data?.kids?.length &&
        <>
          {/* <button type="button" onClick={() => toggteDetails()}>More</button> */}
          {/* <Skeleton loading={isLoading} active avatar>
            <List.Item.Meta
              title={data.title}
            /> 
            <span dangerouslySetInnerHTML={inner}/>
          </Skeleton> */}

          <Collapse onChange={(e) => toggteDetails(e)}>
            <Panel header="More..." key="1">
              {details && <CommentList commentIds={data?.kids}></CommentList>}
            </Panel>

          </Collapse>
        </>
      }
    </>
  )
}