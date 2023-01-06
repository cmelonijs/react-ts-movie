import { MediaType } from "../types";

interface Props {
  type: MediaType | "search";
}

const Catalog = (props: Props) => {
  return <h1>{props.type}</h1>;
};

export default Catalog;
