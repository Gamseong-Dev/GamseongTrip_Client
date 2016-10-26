import {Page} from 'ionic-angular';
import {MessageDetail} from '../feed/message-single';

@Page({
  templateUrl: 'build/templates/feed/messageDetail.html'
})
export class MessagePage {
  messageDetail = MessageDetail;
  constructor(){

  }
}
