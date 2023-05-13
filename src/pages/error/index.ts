import Block from "utils/Block";
import Button from "components/button";
import Title from "components/title";
import CenteredWrapper from "components/centeredWrapper";
import template from "./error.hbs";

type Props = {
  code: string | number;
  message: string;
};

class ErrorComponent extends Block {
  constructor(props: Props) {
    super({ ...props });
  }

  protected init(): void {
    this.children.title = new Title({
      text: this.props.code.toString(),
      size: "xl",
    });
    this.children.button = new Button({
      id: "error-page-btn",
      variant: "link",
      text: "Вернуться к чатам",
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}

const ErrorPage = (props: Props) =>
  new CenteredWrapper({ content: new ErrorComponent(props) });

export default ErrorPage;
