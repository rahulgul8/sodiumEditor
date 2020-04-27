import { AtomicBlockUtils, EditorState, Entity } from 'draft-js';

export default (editorState, src, extraData) => {
    const contentState = editorState.getCurrentContent();
    const data = {
        src,
        ...extraData
    };

    const entityKey = Entity.create('IMAGE', 'IMMUTABLE', data);
    const withAtomic = AtomicBlockUtils.insertAtomicBlock(
        editorState,
        entityKey,
        ' '
    );
    const nextContentState = withAtomic.getCurrentContent();
    const blockMap = nextContentState.getBlockMap();
    const currentAtomicBlock = blockMap.find(block => {
        if (block.getEntityAt(0) === entityKey) {
            return block;
        }
    })
    const atomicBlockKey = currentAtomicBlock.getKey();
    const blockBeforeText = nextContentState.getBlockBefore(atomicBlockKey).getText();
    const blockNextText = nextContentState.getBlockAfter(atomicBlockKey).getText();
    const blockAfterKey = nextContentState.getBlockAfter(atomicBlockKey).getKey();
    // const currentBlockKey = editorState.getSelection().getStartKey();
    // const currentBlockIndex = editorState.getCurrentContent().getBlockMap()
    //     .keySeq().findIndex(k => k === currentBlockKey);
    // const currentCursorIndex = editorState.getSelection().getFocusOffset();
    // const currentBlockText = editorState.getCurrentContent().getBlockForKey(currentBlockKey).getText();

    let blockAfterText = '';
    if (nextContentState.getBlockAfter(blockAfterKey)) {
        blockAfterText = nextContentState.getBlockAfter(blockAfterKey).getText();
    }
    if (blockBeforeText.length > 0) {
        if (blockNextText.length > 0) {
            return EditorState.moveFocusToEnd(withAtomic);
        } else {
            if (blockAfterText.length > 0) {
                const blockAfter = nextContentState.getBlockAfter(atomicBlockKey).getKey();
                const newBlockMap = blockMap.filter(block => {
                    if (block.getKey() !== blockAfter) {
                        return block;
                    }
                });
                const newContentState = contentState.set('blockMap', newBlockMap);
                const newEditorState = EditorState.createWithContent(newContentState);
                return EditorState.moveFocusToEnd(
                    newEditorState
                );
            } else {
                return EditorState.moveFocusToEnd(withAtomic);
            }
        }
    } else {
        const blockBefore = nextContentState.getBlockBefore(atomicBlockKey).getKey();
        let newBlockMap = blockMap.filter(block => {
            if (block.getKey() !== blockBefore) {
                return block;
            }
        });
        const newContentState = contentState.set('blockMap', newBlockMap);
        const newEditorState = EditorState.createWithContent(newContentState);
        return EditorState.moveFocusToEnd(
            newEditorState
        );
    }
};
