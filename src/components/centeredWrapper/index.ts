import Block from "base-component";
import template from "./centeredWrapper.hbs";

type Props = {
  content: Block;
};

class CenteredWrapper extends Block {
  constructor({ content }: Props) {
    super({ content });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

export default CenteredWrapper;
