import { Card, List } from "antd";
import { Item } from "../../models/item"
import { Comment } from './comment';

export interface CommentListProps {
  commentIds: Item['id'][];
}

export function CommentList({ commentIds }: CommentListProps) {
  return (
    <>
      {commentIds.map((id) => (
          <Comment commentId={id} key={id}></Comment>
      ))}
    </>
  )
}