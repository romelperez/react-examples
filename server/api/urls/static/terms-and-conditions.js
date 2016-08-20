import i18n from 'i18n';
import app from 'static/terms-and-conditions/server';

export default {
  /**
   * @api {GET} /terms-and-conditions Request Terms and Conditions
   * @apiName GetTermsAndConditions
   * @apiGroup General
   * @apiDescription
   * Get the project terms and conditions site article in HTML.
   */
  '/terms-and-conditions': {
    get (req, res, next) {

      const lng = req.query.lng || 'en';

      // TODO: Detect language from user locale too.

      // TODO: Connect with database.

      const subtitle = 'Terms and Conditions';
      const article = `
        <p>This is an awesome article with all the terms and conditions for the services and products the company offers in this project.</p>
        <p>Have in mind this is just an example of how everything should be done.</p>
        <p>Don't get too high hopes with covering all the edge-cases this project can have, just be somehow free and open to new ideas.</p>
      `;
      const title = i18n.t('app.title', { lng });

      const content = app({ lng, subtitle, article });

      res.render('static/terms-and-conditions.html', {
        seo: { title },
        content
      });
    }
  }
};