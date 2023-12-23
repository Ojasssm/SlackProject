import React from 'react'

export default function SiteFeatures() {
    return (
        <div className="site-features">
            <div className="feature feature1">
                <div className="vid-box vid-box1">
                    <video src="./images/Slack video 2.mp4"></video>
                </div>
                <div className="vid-text vid-text1">
                    <h1>Move faster with your tools in one place</h1>
                    <p>Automate away routine tasks with the power of generative AI and simplify your workflow with all your favourite apps ready to go in Slack.</p>
                    <div><a href="">Learn more about the Slack platform</a></div>
                </div>
            </div>
            <div className="feature feature2">
                <div className="vid-text vid-text2">
                    <h1>Choose how you want to work</h1>
                    <p>In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</p>
                    <div><a href="">Learn more about flexible communication</a></div>
                </div>
                <div className="vid-box vid-box2">
                    <video src="./images/Slack video 3.webm"></video>
                </div>
            </div>
            <div className="feature feature3">
                <div className="vid-box vid-box3">
                    <video src="./images/Slack video 4.webm"></video>
                </div>
                <div className="vid-text vid-text1">
                    <h1>Bring your team together</h1>
                    <p>At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies.</p>
                    <div><a href="">Learn more about channels</a></div>
                </div>
            </div>
        </div>
    )
}
