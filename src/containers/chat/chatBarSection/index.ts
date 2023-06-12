import { ChatData, ChatDetailsData } from "types/chat";
import Button from "components/button";
import SearchInput from "components/searchInput";
import Input from "components/input";
import Block from "services/block";
import Router from "services/router";
import PAGE_URL from "constants/pageUrls";

import arrowIcon from "../../../../static/icons/arrow-go-to.svg";

import ChatList from "./components/chatBarList";

import template from "./chatBar.hbs";

type Props = {
  chats: ChatData[];
  currentChat?: ChatDetailsData;
};

class ChatBar extends Block {
  constructor(props: Props) {
    super({ ...props });
  }

  protected init() {
    this.children.toProfileButton = new Button({
      variant: "secondary",
      text: "Профиль",
      endIconSrc: arrowIcon,
      onClick: () => Router.go(PAGE_URL.PROFILE),
    });

    this.children.searchInput = new SearchInput({
      input: new Input({
        id: "search-input",
        placeholder: "Поиск",
        type: "search",
      }),
    });

    this.children.chatList = new ChatList({ chats: this.props.chats });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default ChatBar;
