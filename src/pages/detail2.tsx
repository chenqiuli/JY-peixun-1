import React from "react";
import { history, useLocation } from "umi";
import qs from "qs";

export default function detail2() {
  const location = useLocation();
  const query: {
    title?: string;
  } = qs.parse(location.search.substring(1));

  return (
    <div>
      详情标题-{query.title}
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
