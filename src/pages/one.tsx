import App1 from "@/components/02-react基础/1-JSX语法";
import App2 from "@/components/02-react基础/2-在 JSX 中使用 JavaScript 表达式";
import App3 from "@/components/02-react基础/3-条件渲染";
import App4 from "@/components/02-react基础/4-列表渲染";
import App5 from "@/components/02-react基础/5-事件绑定";
import App7 from "@/components/02-react基础/6-使用hooks/useEffect1";
import App8 from "@/components/02-react基础/6-使用hooks/useEffect2";
import App6 from "@/components/02-react基础/6-使用hooks/useState";
import React from "react";

export default function One() {
  return (
    <div>
      <h2>react基础</h2>
      <App1 />
      <App2 />
      <App3 />
      <App4 />
      <App5 />
      <App6 />
      <App7 />
      <App8 />
    </div>
  );
}
