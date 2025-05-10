import { useState } from "react";

const Tabs = ({ tabsData, currentIndex = 0}) => {
    const [tabs] = useState(tabsData);
    const [currentTab, setCurrentTab] = useState(currentIndex);
    
    const generateTabsHeading = () => {
        return (
            <div className="tabs-heading">
                {tabs.length > 0 && 
                    tabs.map((tab, index) => {
                        return (
                            <button key={index} onClick={() => setCurrentTab(index)}>{tab.label}</button>
                        )
                    })
                }
            </div>
        )
    }

    const generateTabsContent = () => {
        return (
            <div className="tabs-content">
                {tabs.length > 0 &&
                    tabs.map((tab, index) => {
                        return (
                            <div key={index} className={`${index === currentTab ? "active" : "inactive"}`}>
                                {tab.content}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            {generateTabsHeading()}
            {generateTabsContent()}
        </>
    )
}

export default Tabs;