import Block from "utils/Block";
import template from "./emptyMessage.hbs";

class EmptyMessage extends Block {
  constructor() {
    super({});
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default EmptyMessage;
