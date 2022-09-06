const controller = {};


controller.healthCheck = async (req, res) => {
  try {
    let message = 'Controller working'
    return res.status(200).json({message});
  } catch (e) {
    console.log(e);
  }
};

export default controller;
