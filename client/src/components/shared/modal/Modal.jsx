import React from 'react'
import PropTypes from 'prop-types'
import { Card, Row } from 'react-bootstrap'
import { motion, AnimatePresence } from 'framer-motion'

const backdropVariants = {
  visible: { opacity: 1, transition: { when: 'beforeChildren' } },
  hidden: { opacity: 0 },
  exit: {
    opacity: 0,
    transition: { when: 'afterChildren' }
  }
}

const cardVariants = {
  visible: {
    opacity: 1,
    scaleY: 1,
    transition: { type: 'spring', duration: 0.5 }
  },
  hidden: {
    opacity: 0,
    scaleY: 0.8
  },
  exit: {
    opacity: 0,
    scaleY: 0.8
  }
}

export default function Modal({ title, showModal, handleModal, children }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop mx-auto"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            style={{ position: 'absolute', width: '100%', height: '100%' }}
            variants={cardVariants}
          >
            <Card
              className="mx-auto"
              style={{
                maxWidth: '750px',
                minWidth: '300px',
                top: '10%',
                zIndex: '100',
                borderRadius: '10px'
              }}
            >
              <Row className="justify-content-between pb-1 pt-4 pl-5 pr-5">
                <h4>{title}</h4>
                <div>
                  <div onClick={() => handleModal()}>X</div>
                </div>
              </Row>
              <hr />
              <section className="p-4">{children}</section>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}
