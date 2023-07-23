import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey:'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',
});

const openai = new OpenAIApi(configuration);

export const createEssay = async (req:NextApiRequest,res:NextApiResponse)=>{
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: "Crie uma redação sobre" + req.body.text + "\n",
            temperature: 0.7,
            max_tokens: 4000,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
          });

          res.status(200).json({ result: response.data });
}
    

