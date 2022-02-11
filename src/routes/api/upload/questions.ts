

import e from 'express';
import {readFile, utils} from 'xlsx';
import type { IexcelQuestion, Iquestion } from '../../../Model/question';

export function post(req, res) {
    try {
       
        const workbook = readFile(req.files.excel.path);
        
      let sheet = utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
      console.log(sheet);
      let questions: Iquestion[] = [];
      sheet.forEach((s: IexcelQuestion)=>{
        let question:Iquestion ={};
        question.options = [];
        question.answer = s.answer;
        question.image = s.image;
        question.explanation = s.explanation;
        question.instructions = s.instruction;
        question.question = s.question;
        question.type = s.question_type;
        if(question.type == 1){
            if(s.option_e != 'nil' && s.option_e) question.options.push(s.option_e);
            if(s.option_a && s.option_a != 'nil') question.options.push(s.option_a);
            if(s.option_b && s.option_b != 'nil') question.options.push(s.option_b);
            if(s.option_c && s.option_c != 'nil') question.options.push(s.option_c);
            if(s.option_d && s.option_d != 'nil') question.options.push(s.option_d);
        }
        
        console.log(question);
        questions.push(question);
      })
      res.json(questions);
    } catch (error) {
        console.log(error);
        res.end('hotting error');
    }
}