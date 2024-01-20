const { body } = require('express-validator');

const photoInsertValidation = () => {
  return [
    body('title')
      .not()
      .equals('undefined')
      .withMessage('Título é obrigatório.')
      .isString()
      .withMessage('Título é obrigatório.')
      .isLength({ min: 3 })
      .withMessage('Título deve ter no mínimo 3 caracteres.'),
    body('image').custom((value, { req }) => {
      if (!req.file) {
        throw new Error('A imagem é obrigatória.');
      }
      return true;
    }),
  ];
};

const photoUpdateValidation = () => {
  return [
    body('title')
      .optional()
      .isString()
      .withMessage('O titulo é obrigatório')
      .isLength({ min: 3 })
      .withMessage('O títutlo precisa ter no mínimo 3 caracteres.'),
  ];
};

const commentValidation = () => {
  return [body('comment').isString().withMessage('O comentário é obrigatório')];
};

module.exports = {
  photoInsertValidation,
  photoUpdateValidation,
  commentValidation,
};
