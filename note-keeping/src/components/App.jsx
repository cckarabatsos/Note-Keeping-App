import React, { useState, } from 'react';
import Header from './Header';
import Footer from './Footer';
import CreateArea from './CreateArea';
import Note from './Note';



function App() {
    return (
        <div>
            <Header />
            <CreateArea />
            <Footer />
        </div>
    );
}


export default App;