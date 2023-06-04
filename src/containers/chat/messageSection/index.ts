import { ChatDetailsData } from "types/chat";
import Divider from "components/divider";
import Block from "base-component";
import ValidationMediator from "validation/ValidationMediator";
import Header from "./components/messageSectionHeader";
import Content from "./components/messageSectionContent";
import Footer from "./components/messageSectionFooter";

import template from "./messageSection.hbs";

type Props = {
  currentChat: ChatDetailsData;
  validation: ValidationMediator;
};

class ChatMessages extends Block {
  constructor(props: Props) {
    super({ ...props });
  }

  protected init() {
    const { chatName, messages, myDraftMessage } = this.props.currentChat;

    this.children.header = new Header({ chatName });

    this.children.topDivider = new Divider();

    this.children.content = new Content({ messages });

    this.children.bottomDivider = new Divider();

    this.children.footer = new Footer({
      validation: this.props.validation,

      savedMessage:
        myDraftMessage != null && myDraftMessage.contentType === "text"
          ? myDraftMessage.content.toString()
          : undefined,
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default ChatMessages;
