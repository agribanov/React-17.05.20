import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StickersList from './components/StickersList';
import api from './api';

const EMPTY_STICKER = {
    description: '',
    x: 10,
    y: 10,
};

function App() {
    const [stickers, setStickers] = useState([]);

    useEffect(() => {
        api.get().then(({ data }) => setStickers(data));
    }, []);

    function addNewSticker() {
        api.post('', EMPTY_STICKER).then(({ data }) =>
            setStickers([...stickers, data])
        );
    }

    function deleteSticker(sticker) {
        api.delete(sticker.id).then(() => {
            setStickers(stickers.filter((el) => el !== sticker));
        });
    }

    function changeSticker(id, updatedData) {
        let sticker = stickers.find((el) => el.id === id);

        sticker = {
            ...sticker,
            ...updatedData,
        };

        const newStickers = stickers.map((el) =>
            el.id === sticker.id ? sticker : el
        );
        setStickers(newStickers);
    }

    function saveSticker(id) {
        const sticker = stickers.find((el) => el.id === id);

        api.put(id, sticker);
    }

    return (
        <>
            <Header onAddClick={addNewSticker} />
            <StickersList
                stickers={stickers}
                onDelete={deleteSticker}
                onChange={changeSticker}
                onSave={saveSticker}
            />
        </>
    );
}

export default App;
