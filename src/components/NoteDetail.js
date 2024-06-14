import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editNote } from '../redux/actions';
import { useTranslation } from 'react-i18next';

const NoteDetail = ({ note }) => {
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    const dispatch = useDispatch();
    const { t } = useTranslation();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editNote(note.id, {
            ...note,
            title,
            content
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
            />
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Content"
            />
            <button type="submit">{t('save')}</button>
        </form>
    );
};

export default NoteDetail;
