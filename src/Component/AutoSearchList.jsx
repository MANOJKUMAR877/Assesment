import React from "react";
import { AutoComplete } from "antd";

class AutoSearchList extends React.Component {
  render() {
    let attribute = this.props || {};
    return (
      <div>
        <AutoComplete
          style={{
            minWidth: 1600,
            padding: "10px",
          }}
          {...attribute}
          filterOption={(inputValue, option) =>
            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
    );
  }
}

export default AutoSearchList;
