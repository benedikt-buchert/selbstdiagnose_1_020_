import Route from '@ember/routing/route';

export default class StepRoute extends Route {
  async model(params) {
    const steps = await this.store.findAll('step');
    let step = steps.findBy('id', params.id)
    return step;
    }
}
