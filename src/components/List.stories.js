import React from "react";
import { Icon } from "./Icon";
import { List, ListItem } from "./List";
import { color } from "../shared/styles";
import { Placeholder, PlaceholderLine } from "./Placeholder";
import { Button } from "./Button";
export default {
  title: "Components | List",
  parameters: {
    component: List,
    componentSubtitle: "Displays a List"
  }
};

const countPerPage = 4;
class ListWithLoadMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      list: [],
      loading: true,
      initialLoading: true
    };
    this.loadData = this.loadData.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }
  loadData() {
    this.setState({
      loading: true,
      data: this.state.data.concat(
        [...new Array(countPerPage)].map(() => ({
          loading: true
        }))
      )
    });
    setTimeout(() => {
      const data = this.state.list.concat(
        [...new Array(countPerPage)].map(() => ({}))
      );
      this.setState({ list: data, data });
    }, 1000);
  }
  render() {
    return (
      <div>
        <List
          withBorder
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          data={this.state.data}
          listItem={item => (
            <ListItem>
              <PlaceholderLine loading={item.loading}>
                {"hi how are you"}
              </PlaceholderLine>
            </ListItem>
          )}
        ></List>
        <Button
          onClick={this.loadData}
          style={{ marginTop: 10, textAlign: "center" }}
        >
          Load more
        </Button>
      </div>
    );
  }
}

export const defaultList = () => (
  <div>
    <div>
      <ListWithLoadMore />
    </div>
    <div style={{ marginTop: 30 }}>
      <List
        withBorder
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        listItem={item => (
          <ListItem>
            <b>Breaking:</b> {item}
          </ListItem>
        )}
        data={[
          "This is the first item in the list",
          "and this is the second item in the list"
        ]}
      ></List>
    </div>
    <div style={{ marginTop: 20 }}>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        listItem={item => (
          <ListItem>
            <div style={{ display: "flex" }}>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: color.mediumdark,
                    color: color.lightest,
                    borderRadius: "50%",
                    width: 32,
                    height: 32,
                    padding: 5,
                    boxSizing: "border-box",
                    textAlign: "center",
                    verticalAlight: "center"
                  }}
                >
                  <Icon type="user" style={{ fontSize: 18 }}></Icon>
                </span>
              </div>
              <div style={{ marginLeft: 20 }}>
                <div>{item.title}</div>
                <div style={{ marginTop: 5 }}>{item.description}</div>
              </div>
            </div>
          </ListItem>
        )}
        data={[
          {
            title: "First component",
            description: "Some description for first title"
          },
          {
            title: "Second component",
            description: "Some description for second title"
          }
        ]}
      ></List>
    </div>
  </div>
);

defaultList.story = {
  name: "Basic List"
};
