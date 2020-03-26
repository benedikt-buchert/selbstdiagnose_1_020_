import Model, { attr } from '@ember-data/model';

export default class StepModel extends Model {
    @attr('string') body;
    @attr('string') question;
    @attr('number') progress;
    @attr('string') additionalinfo;
    @attr options;

}
