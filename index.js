/**
 * koa-querybody - index.js
 * Copyright(c) 2018
 * MIT Licensed
 *
 * @author  Fred Shaw
 * @api private
 */

'use strict';


module.exports = koa_querybody;


function koa_querybody(opts={}) {
  
  return async function (ctx, next) {
    
    // merge request.query
    let params = Object.assign({}, ctx.request.query);
    
    // merge req.body
    if (ctx.req.body !== null && typeof(ctx.req.body) === 'object') {
      params = Object.assign(params, ctx.req.body);
    }
    
    // merge request.body
    if (ctx.request.body !== null && typeof(ctx.request.body) === 'object') {
      params = Object.assign(params, ctx.request.body);
    }
    
    // merge request.files
    if (ctx.request.files !== null && typeof(ctx.request.files) === 'object') {
      params = Object.assign(params, ctx.request.files);
    }
  
    // merge to ctx.params
    if (ctx.params && typeof(ctx.params) === 'object') {
      Object.assign(ctx.params, params);
    } else {
      ctx.params = params;
    }
    
    // merge to ctx.request.params
    if (ctx.request.params && typeof(ctx.request.params) === 'object') {
      Object.assign(ctx.request.params, params);
    } else {
      ctx.request.params = params;
    }
    
    if (opts.logger){
      opts.logger.debug(`  Parameters: ${JSON.stringify(ctx.params)}`);
    }
    
    await next();
  };
}


