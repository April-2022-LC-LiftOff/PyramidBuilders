import React, { Component } from "react";
import ReactDOM from 'react-dom';
import '../css/main.css';

//main React app.
class Main extends Component {
    render() {
        return (
           <Router>
                   <Navigation />
                   <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/about" element={<About />} />
                     <Route path="/contact" element={<Contact />} />
                     <Route path="/blog" element={<Blog />}>
                       <Route path="" element={<Posts />} />
                       <Route path=":postSlug" element={<Post />} />
                     </Route>
                   </Routes>
                   <Footer />
                 </Router>,
        );
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('react-mountpoint')
);