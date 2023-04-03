const Prior = require('../Model/priorModel');
const features = require('../UtilsBasys/features');
const catchAsync = require('../UtilsBasys/catchAsync');

exports.getAllPrior = catchAsync(async(req , res , next) =>{

    const newFeatures = new features(Prior.find() , req.query)
                            .filter()
                            .sort()
                            .limitFields()
                            .paginate();
    const priors = await newFeatures.query;


        res.status(200).json({
            status : 'success',
            results : priors.length,
            data : {
                priors
            }
        });
    });

 exports.createPrior = catchAsync(async (req , res , next)=>{
    const nePrior = await Prior.create(req.body);
        
    res.status(201).json({
        status : 'success',
        data : {
            prior : nePrior
            }
    });
});
