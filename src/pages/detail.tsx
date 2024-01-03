import React from "react";
import { history, useParams } from "umi";

export default function detail() {
  const { name } = useParams();
  return (
    <div>
      详情标题-{name}
      <button
        onClick={() => {
          history.back();
        }}
      >
        回退
      </button>
    </div>
  );
}
