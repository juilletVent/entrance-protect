import { Dialog, FloatingBubble, List, Toast } from "antd-mobile";
import { AddOutline, CompassOutline } from "antd-mobile-icons";
import SwipeAction from "antd-mobile/es/components/swipe-action";
import { ManagementLayout } from "./style";

const str = "123456789qwertyuiop[]asdfghjkl";

function RuleManagement() {
  return (
    <ManagementLayout>
      <List header="准入规则列表（左滑删除）">
        {str.split("").map((item) => (
          <SwipeAction
            key={item}
            rightActions={[
              {
                key: "delete",
                text: "删除",
                color: "danger",
                onClick: async () => {
                  await Dialog.confirm({
                    content: "确定要删除吗？",
                  });
                },
              },
            ]}
          >
            <List.Item
              onClick={() => {
                Toast.show("你点击了列表项");
              }}
              description="IEPL-JP Port 50000-59999 UDP TCP"
            >
              212.218.169.26
            </List.Item>
          </SwipeAction>
        ))}
      </List>
      <FloatingBubble
        style={{
          "--initial-position-bottom": "84px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
        }}
      >
        <CompassOutline fontSize={32} color="#333" />
      </FloatingBubble>
      <FloatingBubble
        style={{
          "--initial-position-bottom": "24px",
          "--initial-position-right": "24px",
          "--edge-distance": "24px",
        }}
      >
        <AddOutline fontSize={32} color="#333" />
      </FloatingBubble>
    </ManagementLayout>
  );
}

export default RuleManagement;
