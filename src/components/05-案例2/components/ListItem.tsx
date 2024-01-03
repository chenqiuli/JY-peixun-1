import { ListType } from "../TodoList2";
import { history } from "umi";

interface ListItemProps {
  item: ListType;
  list: ListType[];
  setlist: (val: ListType[]) => void;
}

export default function ListItem(props: ListItemProps) {
  const { item, list, setlist } = props;

  return (
    <li
      key={item.id}
      style={{
        marginBottom: 8,
        color: "purple",
        width: "100%",
        height: 40,
        background: "pink",
      }}
    >
      <span style={{ marginRight: 8 }}>{`${item.title}`}</span>
      <button
        onClick={() => {
          const newList = [...list].filter((ele) => ele.id !== item.id);
          setlist(newList);
        }}
      >
        删除
      </button>
      &nbsp;
      <button
        onClick={() => {
          history.push(`/detail/${item.title}`);
        }}
      >
        查看详情1
      </button>
      &nbsp;
      <button
        onClick={() => {
          history.push(`/detail2?title=${item.title}`);
        }}
      >
        查看详情2
      </button>
    </li>
  );
}
