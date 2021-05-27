import React from "react";
import { AutoComplete, Table, Button } from "antd";
import { DeleteOutlined } from "@material-ui/icons";
import options from "../JsonData/DummySearchData";
class AutoSearchList extends React.Component {
  state = {
    selectedRowKeys: [],
    loading: false,
    searchValue: "",
    dummyJsonData: [],
    selectedRows: [],
  };
  columns = [
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
            this.singleDelete(e, record.key);
          }}
        >
          Remove
        </Button>
      ),
    },
  ];

  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys, searchValue: "" });
  };
  
  select = (value, options) => {
    let { dummyJsonData } = this.state || {};
    let optionIndex = dummyJsonData.findIndex((val) => val.value === value);
    if (optionIndex === -1) {
      this.setState({ dummyJsonData: [...dummyJsonData, options] });
    } else {
      alert("Oh No ! Already Data Exists");
    }
  };
  multipleDelete = () => {
    let { dummyJsonData, selectedRowKeys } = this.state || {};
    let _data = [...dummyJsonData];
    selectedRowKeys.forEach((rd) => {
      _data = _data.filter((t) => t.key !== rd);
    });
    this.setState({ dummyJsonData: _data });
  };
  singleDelete = (e, recordkey) => {
    let { dummyJsonData } = this.state || {};
    e.preventDefault();
    const data = dummyJsonData.filter((item) => item.key !== recordkey);
    this.setState({ dummyJsonData: data });
  };

  render() {
    const { selectedRowKeys } = this.state || {};
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    let { dummyJsonData } = this.state || {};
    return (
      <div>
        <AutoComplete
          style={{
            minWidth: 1600,
            padding: "10px",
          }}
          options={options}
          onSelect={this.select}
          placeholder="ENTER TO SEARCH "
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
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
                icon={<DeleteOutlined />}
                onClick={() => this.multipleDelete()}
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
          columns={this.columns}
          dataSource={dummyJsonData}
        />
      </div>
    );
  }
}

export default AutoSearchList;
