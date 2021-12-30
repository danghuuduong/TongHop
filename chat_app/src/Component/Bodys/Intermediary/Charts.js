import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

function Charts() {
    function callback(key) {
        console.log(key);
    }
    return (
        <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="Văn học" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="Light Novel" key="2">
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Thiếu nhi" key="3">
                Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Manga - Comic" key="4">
                Content of Tab Pane 4
            </TabPane>
            <TabPane tab="Kinh Tế" key="5">
                Content of Tab Pane 5
            </TabPane>
        </Tabs>
    )
}

export default Charts
