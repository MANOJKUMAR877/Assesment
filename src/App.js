import React, { Component } from "react";
import AutoSearchList from "./Component/AutoSearchList";
import SelectedSearchList from "./Component/SelectedSearchList";
import options from "./JsonData/DummySearchData";
export default class App extends Component {
  state = {
    selectedRowKeys: [],
    loading: false,
    searchValue: "",
    dummyJsonData: [],
    selectedRows: [],
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
  onSelectChange = (selectedRowKeys) => {
    this.setState({ selectedRowKeys, searchValue: "" });
  };

  render() {
    let searchAttributes = {
      options: options,
      onSelect: this.select,
      placeholder: "ENTER TO SEARCH ",
    };
    let selectedListAttribute = {
      dataSource: options,
      multipleDelete: this.multipleDelete,
      singleDelete: this.singleDelete,
      onSelectChange: this.onSelectChange,
      selectedRowKeys: this.state.selectedRowKeys,
      selectedRows: this.state.selectedRows,

      dummyJsonData: this.state.dummyJsonData,
    };
    return (
      <div>
        <AutoSearchList {...searchAttributes} />
        <SelectedSearchList {...selectedListAttribute}/>
      </div>
    );
  }
}
