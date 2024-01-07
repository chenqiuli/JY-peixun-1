import React from "react";

export default function App3() {
  return (
    <>
      {3 < 2 ? <div>小于</div> : <div>大于</div>}
      {3 > 2 && <div>大于</div>}
    </>
  );
}
