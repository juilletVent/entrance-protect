import { Button, Form, Input, InputRef } from "antd";
import { useCallback, useEffect, useRef } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { FormCard, LoginLayout, LoginTitle } from "./style";
import { useRoute } from "../../hooks";
import { routePath } from "../Home/toutePath";

const { Item: FormItem } = Form;

function Login() {
  const userFormRef = useRef<InputRef>(null);

  const { routePush } = useRoute();

  const onLogin = useCallback(() => {
    routePush(routePath.ROUTE_PATH_RULE_MANAGEMENT);
  }, [routePush]);

  useEffect(() => {
    userFormRef.current?.focus();
  }, []);

  return (
    <LoginLayout>
      <FormCard>
        <Form>
          <LoginTitle>准入规则管理</LoginTitle>
          <FormItem
            label="账户名"
            name="username"
            rules={[{ required: true, message: "请输入账户名" }]}
          >
            <Input
              size="large"
              placeholder="请输入邮箱地址"
              ref={userFormRef}
            />
          </FormItem>
          <FormItem
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              size="large"
              placeholder="请输入密码"
              ref={userFormRef}
            />
          </FormItem>

          <Button
            block
            size="large"
            type="primary"
            style={{ marginTop: 30 }}
            onClick={onLogin}
          >
            <LoginOutlined />
            登录
          </Button>
        </Form>
      </FormCard>
    </LoginLayout>
  );
}

export default Login;
