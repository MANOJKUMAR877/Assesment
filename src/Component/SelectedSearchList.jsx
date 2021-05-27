import React, { Component } from "react";
import { Table, Button } from "antd";
export default class SelectedSearchList extends Component {
  render() {
    const {
      selectedRowKeys = [],
      onSelectChange = () => {},
      dummyJsonData = [],
      multipleDelete = () => {},
      singleDelete = () => {},
    } = this.props || {};
    console.log(this.props);
    let columns = [
      {
        title: "value",
        dataIndex: "value",
      },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: (text, record) => (
          <Button
            onClick={(e) => {
              singleDelete(e, record.key);
            }}
          >
            Remove
          </Button>
        ),
      },
    ];

    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;

    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
            paddingTop: "100px",
          }}
        >
          <span>
            {hasSelected ? (
              <Button
                style={{ justifyContent: "center", alignItems: "center" }}
                type="primary"
                onClick={() => multipleDelete()}
              >
                Delete Here
              </Button>
            ) : (
              ""
            )}
          </span>
        </div>
        <Table
          rowSelection={rowSelection}
          columns={columns}
          dataSource={dummyJsonData}
        />
      </div>
    );
  }
}
