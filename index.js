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


function koa_querybody(opts) {
  
  return function (ctx, next) {
    
    let params = Object.assign({}, ctx.request.query);
    
    // merge req.body
    if (ctx.req.body !== null && typeof(ctx.req.body) === 'object') {
      params = Object.assign(params, ctx.req.body);
    }
    
    // merge request.body
    if (ctx.request.body !== null && typeof(ctx.request.body) === 'object') {
      params = Object.assign(params, ctx.request.body);
    }
  
    ctx.params = params;
    ctx.request.params = params;
    next();  
  };
}


