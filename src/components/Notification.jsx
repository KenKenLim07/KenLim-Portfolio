import { motion, AnimatePresence } from 'framer-motion';

export const Notification = ({ message, isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-gray-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-lg shadow-lg">
            <p className="text-sm">{message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 