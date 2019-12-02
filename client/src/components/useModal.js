import { useState } from 'react';

const useModal = () => {
  const [shownModal, setShownModal] = useState(false);

  function toggle(id) {
    if (shownModal == id) {
      setShownModal(null);
    }
    else {
      setShownModal(id);
    }
  }

  return {
    shownModal,
    toggle,
  }
};

export default useModal;