import React, {Component} from 'react';
import Marquee from './components/MarqueeComponent'
import LayoutMaster from './components/LayoutMaster'
import content from './assets/content.json'
import './App.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPageSlug:'services', // default page
        }
    }
    setPage = (slug)=>{
        this.setState({currentPageSlug:slug})
    }
    getCurrentPageObject = ()=>{
        let {currentPageSlug} = this.state
        return content.pages.find(page=>page.slug == currentPageSlug);
    }

    render() {
        let currentPage = this.getCurrentPageObject()
        let propsLayoutMaster = {
            currentPage : currentPage,
            setPage : this.setPage,
            pages:content.pages
        }

        return (
            <div className="App">
                <LayoutMaster {...propsLayoutMaster}>
                    <Marquee currentPage={currentPage}/>
                </LayoutMaster>
            </div>

        );
    }
}

export default App;
