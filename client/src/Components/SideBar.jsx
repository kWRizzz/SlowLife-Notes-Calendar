import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiEdit, FiTrash2, FiSave } from 'react-icons/fi'

const SideBar = () => {

    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [editText, setEditText] = useState("")

    const handleDelete = (i) => {
        setNotes(notes.filter((_, index) => index !== i))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!note.trim()) return
        setNotes([...notes, note])
        setNote("")
    }

    const handleSave = () => {
        const updated = [...notes]
        updated[editIndex] = editText
        setNotes(updated)
        setEditIndex(null)
    }

    return (
        <div className='flex flex-col h-full p-5 bg-[#020617]'>

            {/* Title */}
            <h1 className='text-xl font-semibold text-gray-200 mb-4 tracking-wide'>
                Notes
            </h1>

            {/* Input */}
            <form onSubmit={handleSubmit} className='mb-4'>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder='Write something...'
                    className='w-full p-3 rounded-xl bg-[#0f172a] border border-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
                />

                <button
                    type='submit'
                    className='mt-3 w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-xl transition'
                >
                    Add Note
                </button>
            </form>

            {/* Notes */}
            <div className='flex-1 overflow-y-auto space-y-3'>

                <AnimatePresence>
                    {notes.map((n, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            className='bg-[#0f172a] border border-gray-700 p-3 rounded-xl flex justify-between items-center'
                        >

                            {editIndex === index ? (
                                <input
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className='bg-transparent border-b border-gray-500 text-sm w-full mr-2 focus:outline-none'
                                />
                            ) : (
                                <p className='text-sm text-gray-300'>
                                    {n}
                                </p>
                            )}

                            <div className='flex gap-2 ml-2'>

                                {editIndex === index ? (
                                    <button onClick={handleSave}>
                                        <FiSave />
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => {
                                            setEditIndex(index)
                                            setEditText(n)
                                        }}
                                    >
                                        <FiEdit />
                                    </button>
                                )}

                                <button onClick={() => handleDelete(index)}>
                                    <FiTrash2 />
                                </button>

                            </div>

                        </motion.div>
                    ))}
                </AnimatePresence>

            </div>

        </div>
    )
}

export default SideBar