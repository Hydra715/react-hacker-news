import { User } from './user';
import { SaveHTML } from './save-html';

export enum ItemType {
  JOB = "job",
  STORY = "story",
  COMMENT = "comment",
  POLL = "poll",
  POLLOPT = "pollopt",
}

export interface Item {
  /**
   * @summary The item's unique id. 
   * */
  id: number, 
  /**
   * @summary true if the item is deleted. 
   * */
  deleted: boolean, 
  /**
   * @summary The type of item. One of "job", "story", "comment", "poll", or "pollopt". 
   * */
  type: ItemType, 
  /**
   * @summary The username of the item's author. 
   * */
  by: User['id'], 
  /**
   * @summary Creation date of the item, in Unix Time. 
   * */
  time: number,  
  /**
   * @summary The comment, story or poll text. HTML. 
   * */
  text: string, 
  /**
   * @summary true if the item is dead. 
   * */
  dead: boolean, 
  /**
   * @summary The comment's parent: either another comment or the relevant story. 
   * */
  parent: Item['id'],  
  /**
   * @summary The pollopt's associated poll. 
   * */
  poll: Item['id'][],  
  /**
   * @summary The ids of the item's comments, in ranked display order. 
   * */
  kids: Item['id'][],  
  /**
   * @summary The URL of the story. 
   * */
  url: string,  
  /**
   * @summary The story's score, or the votes for a pollopt. 
   * */
  score: number, 
  /**
   * @summary The title of the story, poll or job. HTML. 
   * */
  title: string, 
  /**
   * @summary A list of related pollopts, in display order. 
   * */
  parts: Item['id'][], 
  /**
   * @summary In the case of stories or polls, the total comment count. 
   * */
  descendants: number, //
  /**
   * @summary humanized time HH:mm DD.MM.YYYY
   */
  humTime: string,
  /**
   * @summary innerHTML from text
   */
  innerHtmlText: SaveHTML,
}