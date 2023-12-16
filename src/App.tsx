import { ConfigProvider, Spin } from "antd";
import { Route, Routes } from "react-router-dom";
import { sysRoute } from "./app/Home/route";
import { Suspense } from "react";
import { BgLayout } from "./style/common";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: "#1890ff" },
      }}
    >
      <BgLayout>
        <Routes>
          {sysRoute.map((routeItem) => (
            <Route
              key={routeItem.path}
              path={routeItem.path}
              element={
                <Suspense fallback={<Spin spinning />}>
                  {routeItem.component}
                </Suspense>
              }
            />
          ))}
        </Routes>
      </BgLayout>
    </ConfigProvider>
  );
}

export default App;
