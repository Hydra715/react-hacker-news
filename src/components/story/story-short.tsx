import { Item } from '../../models/item';
import { useGetItemQuery } from '../../store/api/story.api';
import { Link } from 'react-router-dom';
import { List } from "antd";
import moment from 'moment'


export interface StoryProps {
  id?: Item['id']
  story?: Item,
}
export const StoryShort = ({ story }: StoryProps) => {
  const { isFetching, data } = useGetItemQuery({ id: story?.id })
  const description = `${data?.score || '0'} points by ${data?.by || ''} | comments: ${data?.kids?.length || '0'} | ${data?.humTime}`;

  return (
    <List.Item>
        <List.Item.Meta
          title={
            <Link to={{
              pathname: "/item",
              search: `?story=${data?.id}`,
            }}>{data && data?.title}</Link>
          }
          description={description}
        />
    </List.Item>
  )
}