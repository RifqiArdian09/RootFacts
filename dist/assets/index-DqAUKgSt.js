import{e as V,g as $t,a as fe,c as ye,b as E,K as us,D as ds,d as Me,f as Oe,m as lt,s as N,h as Ye,i as he,j as ct,k as ls,l as cs,n as hs,o as Dt,r as ps,S as fs,p as ms,E as gs,q as xs,t as Cs,u as ws,v as bs,w as ys,F as Ss,x as vs,y as Is,R as ks,z as Rs,A as J,_ as Ps,B as ht,I as $s,C as Ds,G as Se,H as pt,J as Ns,L as zs,M as As,N as Fs,O as Ls,P as Es,T as Bs,Q as je,U as re,V as Re,W as Pe,X as Qe,Y as _s,Z as Ws,$ as Ts,a0 as Vs,a1 as Us,a2 as Ms,a3 as Os,a4 as Gs,a5 as Hs,a6 as Xs,a7 as Ks,a8 as qs,a9 as Ys,aa as js,ab as $e,ac as Qs,ad as Be,ae as Zs,af as Js,ag as eo,ah as to,ai as so,aj as oo,ak as io,al as Nt,am as zt,an as At,ao as ro,ap as ao,aq as no,ar as uo,as as lo,at as co,au as ho,av as po,aw as fo,ax as mo,ay as go,az as xo,aA as ve,aB as Co,aC as wo,aD as bo,aE as yo,aF as De,aG as ee,aH as So,aI as vo,aJ as Io,aK as Ze,aL as ko,aM as Ro,aN as Po,aO as $o,aP as Do,aQ as Ft,aR as No,aS as zo,aT as Ao,aU as Fo,aV as Lo,aW as Eo,aX as Bo,aY as _o,aZ as Wo,a_ as Je,a$ as To,b0 as Vo,b1 as Uo,b2 as Mo,b3 as Oo,b4 as Go,b5 as Ho,b6 as Xo,b7 as Ko,b8 as qo,b9 as Yo,ba as jo,bb as Qo,bc as Zo,bd as Jo,be as ei,bf as ti,bg as si,bh as oi,bi as ii,bj as ri,bk as ai,bl as ni,bm as ui,bn as di,bo as li,bp as Lt,bq as ci,br as hi,bs as pi,bt as fi,bu as mi,bv as gi,bw as xi,bx as Ci,by as wi,bz as bi,bA as yi,bB as Si,bC as vi,bD as Ii,bE as ki,bF as Ri,bG as Pi,bH as $i,bI as Di,bJ as Ni,bK as zi,bL as Ai,bM as Fi,bN as Li,bO as Ei,bP as Bi,bQ as _i,bR as Wi,bS as Ti,bT as Vi,bU as Ui,bV as Mi,bW as Oi,bX as Gi,bY as Hi,bZ as Xi,b_ as Ki,b$ as qi,c0 as Yi,c1 as ji,c2 as Qi,c3 as Zi,c4 as Ji,c5 as er,c6 as tr,c7 as sr,c8 as or,c9 as ir,ca as rr,cb as ar,cc as nr,cd as ur,ce as dr,cf as lr,cg as cr,ch as hr,ci as pr,cj as fr,ck as mr,cl as gr,cm as xr,cn as Cr,co as et,cp as wr,cq as br,cr as yr,cs as Sr,ct as vr,cu as Ir,cv as kr,cw as Rr,cx as Pr,cy as $r,cz as Dr,cA as Nr,cB as zr,cC as Ar,cD as Fr,cE as Lr,cF as Er,cG as Br,cH as _r,cI as Wr,cJ as Tr,cK as Vr,cL as Ur,cM as Mr,cN as Or,cO as Gr,cP as Hr,cQ as Xr,cR as Kr,cS as qr,cT as Yr,cU as jr,cV as Qr,cW as Zr}from"./index-CHtK7h8-.js";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const q=V();q.registerFlag("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE",()=>15);q.registerFlag("WEBGPU_CPU_FORWARD",()=>!0);q.registerFlag("WEBGPU_MATMUL_PROGRAM_TYPE",()=>-1);q.registerFlag("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE",()=>!0);q.registerFlag("WEBGPU_USE_LOW_POWER_GPU",()=>!1);q.registerFlag("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD",()=>1e3);q.registerFlag("WEBGPU_USE_PROFILE_TOOL",()=>!1);q.registerFlag("WEBGPU_IMPORT_EXTERNAL_TEXTURE",()=>!0);q.registerFlag("WEBGPU_USE_NAIVE_CONV2D_DEBUG",()=>!1);q.registerFlag("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL",()=>-1);q.registerFlag("WEBGPU_CONV_SEPARATE_IM2COL_SHADER",()=>!1);q.registerFlag("WEBGPU_PRINT_SHADER",()=>"");q.registerFlag("WEBGPU_ENGINE_COMPILE_ONLY",()=>!1);/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jr{constructor(t){t&&(this.vendor=t.vendor,this.architecture=t.architecture,this.intelGPUGeneration=this.getIntelGPUGeneration())}getIntelGPUGeneration(){if(this.isIntel()){if(this.architecture.startsWith("gen"))return Number(this.architecture.match(/\d+/));if(this.architecture.startsWith("xe"))return 12}return 0}isIntel(){return this.vendor==="intel"}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ea{constructor(t){this.device=t,this.numUsedBuffers=0,this.numFreeBuffers=0,this.freeBuffers=new Map,this.usedBuffers=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireBuffer(t,e,i=!1,o=!0){let r;const a=ft(t,e);return o?(this.freeBuffers.has(a)||this.freeBuffers.set(a,[]),this.freeBuffers.get(a).length>0?(r=this.freeBuffers.get(a).pop(),this.numFreeBuffers--):(r=this.device.createBuffer({size:t,usage:e,mappedAtCreation:i}),this.numBytesAllocated+=t)):(r=this.device.createBuffer({size:t,usage:e,mappedAtCreation:i}),this.numBytesAllocated+=t),this.usedBuffers.has(a)||this.usedBuffers.set(a,[]),this.usedBuffers.get(a).push(r),this.numUsedBuffers++,this.numBytesUsed+=t,r}releaseBuffer(t,e=!0){if(this.freeBuffers.size===0)return;const i=t.size,o=t.usage,r=ft(i,o),a=this.usedBuffers.get(r),n=a.indexOf(t);if(n<0)throw new Error("Cannot find the buffer in buffer manager");a[n]=a[a.length-1],a.pop(),this.numUsedBuffers--,this.numBytesUsed-=i,e?(this.freeBuffers.get(r).push(t),this.numFreeBuffers++):(t.destroy(),this.numBytesAllocated-=i)}getNumUsedBuffers(){return this.numUsedBuffers}getNumFreeBuffers(){return this.numFreeBuffers}dispose(){this.freeBuffers.forEach((t,e)=>{t.forEach(i=>{i.destroy()})}),this.usedBuffers.forEach((t,e)=>{t.forEach(i=>{i.destroy()})}),this.freeBuffers=new Map,this.usedBuffers=new Map,this.numUsedBuffers=0,this.numFreeBuffers=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function ft(s,t){return`${s}_${t}`}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ta{constructor(t){this.device=t,this.numUsedTextures=0,this.numFreeTextures=0,this.freeTextures=new Map,this.usedTextures=new Map,this.numBytesUsed=0,this.numBytesAllocated=0}acquireTexture(t,e,i,o){const r=gt(i),a=t*e*r,n=mt(t,e,i,o);if(this.freeTextures.has(n)||this.freeTextures.set(n,[]),this.usedTextures.has(n)||this.usedTextures.set(n,[]),this.numBytesUsed+=a,this.numUsedTextures++,this.freeTextures.get(n).length>0){this.numFreeTextures--;const d=this.freeTextures.get(n).shift();return this.usedTextures.get(n).push(d),d}this.numBytesAllocated+=a;const u=this.device.createTexture({size:[t,e],format:i,usage:o});return this.usedTextures.get(n).push(u),u}releaseTexture(t){if(this.freeTextures.size===0)return;const e=t.width,i=t.height,o=t.format,r=t.usage,a=mt(e,i,o,r);this.freeTextures.has(a)||this.freeTextures.set(a,[]),this.freeTextures.get(a).push(t),this.numFreeTextures++,this.numUsedTextures--;const n=this.usedTextures.get(a),u=n.indexOf(t);if(u<0)throw new Error("Cannot release a texture that was never provided by this texture manager");n.splice(u,1);const d=gt(o),l=e*i*d;this.numBytesUsed-=l}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){this.freeTextures.forEach((t,e)=>{t.forEach(i=>{i.destroy()})}),this.usedTextures.forEach((t,e)=>{t.forEach(i=>{i.destroy()})}),this.freeTextures=new Map,this.usedTextures=new Map,this.numUsedTextures=0,this.numFreeTextures=0,this.numBytesUsed=0,this.numBytesAllocated=0}}function mt(s,t,e,i){return`${s}_${t}_${e}_${i}`}function gt(s){if(s==="rgba8unorm")return 16;throw new Error(`${s} is not supported!`)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sa(s,t){if(Math.max(...s)>5)throw new Error("Cannot symbolically compute strides for rank > 6 tensor.");const e=s.length,i="xyzwuv",o=s.map(a=>`${t}.${i[a]}`),r=new Array(e-1);r[e-2]=o[e-1];for(let a=e-3;a>=0;--a)r[a]=`(${r[a+1]} * ${o[a+1]})`;return r}const te=(s,t,e)=>e==="int32"?`atomicAdd(${s}, bitcast<i32>(${t}));`:`
          {
            var oldValue = 0;
            loop {
              let newValueF32 = bitcast<f32>(oldValue) + (${t});
              let newValue = bitcast<i32>(newValueF32);
              let res = atomicCompareExchangeWeak(${s}, oldValue, newValue);
              if res.exchanged {
                break;
              }
              oldValue = res.old_value;
            }
          }`;/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var pe;(function(s){s[s.FROM_PIXELS=0]="FROM_PIXELS",s[s.DRAW=1]="DRAW"})(pe||(pe={}));const oa=(s,t,e,i,o)=>{const r={dtype:i.dtype,shape:i.shape},a=ra(e,r,t),n=s.createShaderModule({code:a,label:t.constructor.name});let u=V().get("WEBGPU_PRINT_SHADER");if(u!==""){u=u.toLowerCase();const d=u.split(",");(u==="all"||d.some(l=>t.shaderKey.toLowerCase().includes(l)))&&(console.group(t.shaderKey),console.debug(a),console.groupEnd())}return o?s.createComputePipelineAsync({compute:{module:n,entryPoint:"_start"},label:t.constructor.name,layout:"auto"}):s.createComputePipeline({compute:{module:n,entryPoint:"_start"},label:t.constructor.name,layout:"auto"})},z=(s,t="f32")=>{switch(s){case 1:return`${t}`;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${s}-component ${t} is not supported.`)}};function B(s){if(s<=1)return"i32";if(s===2)return"vec2<i32>";if(s===3)return"vec3<i32>";if(s===4)return"vec4<i32>";if(s===5)return"vec5";if(s===6)return"vec6";throw Error(`GPU for rank ${s} is not yet supported`)}function Q(s){if(s===0)return"x";if(s===1)return"y";if(s===2)return"z";if(s===3)return"w";if(s===4)return"u";if(s===5)return"v";throw Error(`Index ${s} is not yet supported`)}function y(...s){let t;switch(s.length){case 0:t=`
        fn main()
      `;break;case 1:t=`
        fn main(${s[0]} : i32)
      `;break;default:throw Error("Unreachable")}return t}function xt(s,t){let e;return e=`
     ${ia(t)}
      fn _start(@builtin(local_invocation_id) LocalId : vec3<u32>,
                @builtin(global_invocation_id) GlobalId : vec3<u32>,
                @builtin(local_invocation_index) LocalIndex: u32,
                @builtin(workgroup_id) WorkgroupId : vec3<u32>,
                @builtin(num_workgroups) NumWorkgroups : vec3<u32>) {
        localId = LocalId;
        localIndex = LocalIndex;
        globalId = GlobalId;
        numWorkgroups = NumWorkgroups;
        workgroupId = WorkgroupId;
        ${s?"main(getGlobalIndex());":"main();"};
      }
    `,e}function ia(s){return`
  @compute @workgroup_size(${s.workgroupSize[0]}, ${s.workgroupSize[1]}, ${s.workgroupSize[2]})
`}function ra(s,t,e){const i=[],o=e.workgroupSize[0]*e.workgroupSize[1]*e.workgroupSize[2];if(e.outputComponent=e.outputComponent?e.outputComponent:1,i.push(`

      var<private> localId: vec3<u32>;
      var<private> localIndex: u32;
      var<private> globalId: vec3<u32>;
      var<private> numWorkgroups: vec3<u32>;
      var<private> workgroupId: vec3<u32>;

      // Only used when the y/z dimension of workgroup size is 1.
      fn getGlobalIndex() -> i32 {
        ${Et(e)?"  return i32(globalId.x);":`  return i32((workgroupId.z * numWorkgroups.x * numWorkgroups.y +
                workgroupId.y * numWorkgroups.x + workgroupId.x) * ${o}u +
                localIndex);
        `}
      }
    `),e.pixelsOpType!=null){const f=e.pixelsOpType===pe.FROM_PIXELS?`@group(0) @binding(0) var<storage, read_write> result: array<${oe(t.dtype,e.outputComponent)}>;`:`@group(0) @binding(1) var<storage, read> inBuf : array<${oe(s[0].dtype,e.outputComponent)}>;`,m=t.shape.length===3?"vec2<i32>":"i32";i.push(`
        struct Uniform {
          outShapeStrides : ${m},
          size            : i32,
          numChannels     : i32,
          alpha           : f32,
        };

        ${f}
        @group(0) @binding(2) var<uniform> uniforms: Uniform;
      `);const g=wt(e);return[Ct,i.join(`
`),Ae(t.shape),e.getUserCode(),xt(g,e)].join(`
`)}let r,a,n="struct Uniforms { NAN : f32, INFINITY : f32, ";e.variableNames.forEach((f,m)=>{const g=B(s[m].shape.length);n+=`${f.charAt(0).toLowerCase()+f.slice(1)}Shape : ${g}, `,r=s[m].shape.length-1,a=B(r),n+=`${f.charAt(0).toLowerCase()+f.slice(1)}ShapeStrides: ${a}, `});const u=B(t.shape.length);n+=`outShape : ${u}, `,r=t.shape.length-1,a=B(r),n+=`
         outShapeStrides: ${a}, `,e.size&&(n+="size : i32, "),e.uniforms&&(n+=e.uniforms),n+="};",n=fa(n),i.push(n),e.atomic?i.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<atomic<i32>>;
    `):i.push(`
      @group(0) @binding(0) var<storage, read_write> result: array<${oe(t.dtype,e.outputComponent)}>;
    `),e.variableNames.forEach((f,m)=>{i.push(`
      @group(0) @binding(${1+m}) var<storage, read> ${f}: array<${e.variableComponents?oe(s[m].dtype,e.variableComponents[m]):oe(s[m].dtype,e.outputComponent)}>;
        `)}),n!==""&&i.push(`
      @group(0) @binding(${1+e.variableNames.length}) var<uniform> uniforms: Uniforms;
      `);const d=ca(t.shape,e.dispatchLayout),l=[Ct,i.join(`
`)+na,Ae(t.shape),d,ha(t.shape.length)];e.atomic||l.push(pa(t.shape,t.dtype,e.outputComponent)),e.variableNames.forEach((f,m)=>{l.push(`${Ae(s[m].shape,f)}`)});const h=s.map((f,m)=>la(f,t.shape,e.variableComponents?e.variableComponents[m]:e.outputComponent,e.dispatchLayout.x.length===t.shape.length)).join(`
`);l.push(h),l.push(e.getUserCode());const c=wt(e);return l.push(xt(c,e)),l.join(`
`)}function aa(s,t,e){let i=s.shaderKey;if(s.pixelsOpType!=null)return i;const o=[],r=[];t.forEach(l=>{o.push(l.shape),r.push(l.dtype)}),o.push(e.shape),r.push(e.dtype);const a=t.map(l=>$t(l.shape,e.shape)),n=t.map(l=>fe(l.shape,e.shape)).join("_"),u=a.map(l=>l.join("_")).join(";"),d=Et(s)?"flatDispatch":"";return i+="_"+(s.workgroupSize?s.workgroupSize.join(","):"")+o.map(l=>l.length).join(",")+r.join(",")+s.variableNames.join(",")+u+n+d,i}const Ct=`
  struct vec5 {x: i32, y: i32, z: i32, w: i32, u: i32};
  struct vec6 {x: i32, y: i32, z: i32, w: i32, u: i32, v: i32};

  // Checks whether coordinates lie within the bounds of the shape.
  fn coordsInBounds2D(coord : vec2<i32>, shape : vec2<i32>) -> bool {
    return all(coord >= vec2<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds3D(coord : vec3<i32>, shape : vec3<i32>) -> bool {
    return all(coord >= vec3<i32>(0)) && all(coord < shape);
  }
  fn coordsInBounds4D(coord : vec4<i32>, shape : vec4<i32>) -> bool {
    return all(coord >= vec4<i32>(0)) && all(coord < shape);
  }

  fn getIndexFromCoords1D(coord : i32, shape : i32) -> i32 {
    return coord;
  }
  fn getIndexFromCoords2D(coords : vec2<i32>, shape : vec2<i32>) -> i32 {
    return dot(coords, vec2<i32>(shape.y, 1));
  }
  fn getIndexFromCoords3D(coords : vec3<i32>, shape : vec3<i32>) -> i32 {
    return dot(coords, vec3<i32>(shape.y * shape.z, shape.z, 1));
  }
  fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
    return dot(coords, vec4<i32>(
        shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
  }
  fn getIndexFromCoords5D(coords : vec5, shape : vec5) -> i32 {
    let shapeStrides: vec5 = vec5(shape.y * shape.z * shape.w * shape.u, shape.z * shape.w * shape.u, shape.w * shape.u, shape.u, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u;
  }
  fn getIndexFromCoords6D(coords : vec6, shape : vec6) -> i32 {
    let shapeStrides: vec6 = vec6(shape.y * shape.z * shape.w * shape.u * shape.v, shape.z * shape.w * shape.u * shape.v, shape.w * shape.u * shape.v, shape.u * shape.v, shape.v, 1);
    return coords.x*shapeStrides.x + coords.y*shapeStrides.y + coords.z*shapeStrides.z + coords.w*shapeStrides.w + coords.u*shapeStrides.u + coords.v*shapeStrides.v;
  }

  // NaN defination in IEEE 754-1985 is :
  //   - sign = either 0 or 1.
  //   - biased exponent = all 1 bits.
  //   - fraction = anything except all 0 bits (since all 0 bits represents infinity).
  // https://en.wikipedia.org/wiki/IEEE_754-1985#Representation_of_non-numbers
  fn isnan(val: f32) -> bool {
    let floatToUint: u32 = bitcast<u32>(val);
    return (floatToUint & 0x7fffffffu) > 0x7f800000u;
  }
  fn isnanVec4(val : vec4<f32>) -> vec4<bool> {
    let floatToUint: vec4<u32> = bitcast<vec4<u32>>(val);
    return (floatToUint & vec4<u32>(0x7fffffffu)) > vec4<u32>(0x7f800000u);
  }
`,na=`
  fn isinf(val: f32) -> bool {
    return abs(val) == uniforms.INFINITY;
  }
`;function Ae(s,t=""){const e=s.length,i=t!==""?`get${t.charAt(0).toUpperCase()+t.slice(1)}CoordsFromIndex`:"getCoordsFromIndex",o=t!==""?`${t.charAt(0).toLowerCase()+t.slice(1)}ShapeStrides`:"outShapeStrides";if(e<=1)return`fn ${i}(index : i32) -> i32 { return index; }`;const r=ye(s),a=B(e),n=[];for(let d=0;d<e;d++)n.push(`d${d}`);if(r.length===1)return`    fn ${i}(index : i32) -> vec2<i32> {
      let d0 = index / uniforms.${o}; let d1 = index - d0 * uniforms.${o};
      return vec2<i32>(d0, d1);
    }`;let u;return u="var index2 = index;"+r.map((d,l)=>{const h=`let ${n[l]} = index2 / uniforms.${o}.${Q(l)}`,c=l===r.length-1?`let ${n[l+1]} = index2 - ${n[l]} * uniforms.${o}.${Q(l)}`:`index2 = index2 - ${n[l]} * uniforms.${o}.${Q(l)}`;return`${h}; ${c};`}).join(""),`
    fn ${i}(index : i32) -> ${a} {
      ${u}
      return ${a}(${n.join(",")});
    }
  `}function ua(s,t){const e=s.name,i=s.shape.length,o=B(i),r="get"+e.charAt(0).toUpperCase()+e.slice(1),a=["d0","d1","d2","d3","d4","d5"].slice(0,i),n=a.map(l=>`${l} : i32`).join(", ");if(i<1)return`
      fn ${r}() -> ${z(t)} {
        return ${z(t)}(${e}[0]);
      }
    `;const u=`uniforms.${e.charAt(0).toLowerCase()+e.slice(1)}Shape`;let d=`${i}D`;return i===0&&(d="1D"),`
    fn ${r}(${n}) -> ${z(t)} {
      return ${z(t)}(${e}[getIndexFromCoords${d}(${o}(${a.join(",")}),
        ${u})${t===1?"":` / ${t}`}]);
    }
   `}function da(s,t,e,i){const o=s.name,r=o.charAt(0).toUpperCase()+o.slice(1),a="get"+r+"ByOutput",n=s.shape.length,u=t.length,d=B(u);if(fe(s.shape,t)&&i)return`
    fn ${a}Index(globalIndex : i32) -> ${z(e)} {
      return ${z(e)}(${o}[globalIndex]);
    }

    fn ${a}Coords(coords : ${d}) -> ${z(e)} {
      return ${z(e)}(${o}[${u>1?"getOutputIndexFromCoords(coords)":"coords"}${e===1?"":` / ${e}`}]);
    }
    `;const l=$t(s.shape,t),h=u-n;let c="";if(n===0)return`
    fn ${a}Index(globalIndex : i32) -> ${z(e)}{
      return get${r}();
    }

    fn ${a}Coords(coords : ${d}) -> ${z(e)}{
      return get${r}();
    }
  `;u<2&&l.length>=1?c="coords = 0;":c=l.map(g=>`coords.${Q(g+h)} = 0;`).join(`
`);let p="";if(u<2&&n>0)p="coords";else if(u>1){const g=B(n),x=s.shape.map((C,w)=>`coords.${Q(w+h)}`).join(", ");p=`${g}(${x})`}else p="coords";const f=`uniforms.${o.charAt(0).toLowerCase()+o.slice(1)}Shape`,m=`${n}D`;return`
  fn ${a}Index(globalIndex : i32) -> ${z(e)} {
    var coords = getCoordsFromIndex(globalIndex);
    ${c}
    return ${z(e)}(${o}[getIndexFromCoords${m}(${p}, ${f})${e===1?"":` / ${e}`}]);
  }

  fn ${a}Coords(coordsIn : ${d}) -> ${z(e)} {
    var coords = coordsIn;
    ${c}
    return ${z(e)}(${o}[getIndexFromCoords${m}(${p}, ${f})${e===1?"":` / ${e}`}]);
  }
`}function la(s,t,e,i){let o=ua(s,e);return s.shape.length<=t.length&&(o+=da(s,t,e,i)),o}function ca(s,t){const{x:e,y:i=[],z:o=[]}=t,r=s.length,a=e.length+i.length+o.length;if(a!==r)return"";if(e.length===r)return`fn getOutputCoords() -> ${B(r)}{
    let globalIndex = getGlobalIndex();
    return getCoordsFromIndex(globalIndex);
  }
  `;let n="";const u=[e,i,o];for(let c=0;c<u.length;c++){const p=u[c];if(p.length!==0)if(p.length===1)n+=`let d${p[0]} = i32(globalId[${c}]);`;else{const f=sa(p,"uniforms.outShape");n+=`var index${c} = i32(globalId[${c}]);`;for(let m=0;m<f.length;m++)n+=`let d${p[m]} = index${c} / ${f[m]};`,m===f.length-1?n+=`let d${p[m+1]} = index${c} - d${p[m]} * ${f[m]};`:n+=`index${c} = index${c} - d${p[m]} * ${f[m]};`}}const d=[];for(let c=0;c<a;c++)d.push(`d${c}`);const l=B(a);let h=`fn getOutputCoords() -> ${l} {
  ${n}
`;return d.length===0?h+=`return ${l}(0); }`:h+=`return ${l}(${d.join(",")}); }`,h}function ha(s){let t="";switch(s){case 0:case 1:t+=`
        fn getOutputIndexFromCoords(coords : i32) -> i32 {
          return coords;
        }
        `;break;case 2:t+=`
        fn getOutputIndexFromCoords(coords : vec2<i32>) -> i32 {
          return dot(coords, vec2<i32>(uniforms.outShapeStrides, 1));
        }
        `;break;case 3:t+=`
        fn getOutputIndexFromCoords(coords : vec3<i32>) -> i32 {
          return dot(coords, vec3<i32>(uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, 1));
        }
        `;break;case 4:t+=`
        fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
          return dot(coords, vec4<i32>(
            uniforms.outShapeStrides.x, uniforms.outShapeStrides.y, uniforms.outShapeStrides.z, 1));
        }
        `;break;case 5:t+=`
        fn getOutputIndexFromCoords(coords : vec5) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u;
        }
        `;break;case 6:t+=`
        fn getOutputIndexFromCoords(coords : vec6) -> i32 {
          return coords.x * uniforms.outShapeStrides.x +
              coords.y * uniforms.outShapeStrides.y +
              coords.z * uniforms.outShapeStrides.z +
              coords.w * uniforms.outShapeStrides.w +
              coords.u * uniforms.outShapeStrides.u +
              coords.v;
        }
        `;break;default:E(!1,()=>`Unsupported ${s}D shape`);break}return t}function Et(s){return s.dispatch[1]===1&&s.dispatch[2]===1}function oe(s,t=1){if(s==="float32")return z(t,"f32");if(s==="int32"||s==="bool")return z(t,"i32");throw new Error(`type ${s} is not supported.`)}function pa(s,t,e){const i=s.length,o=oe(t,e);let r=`fn setOutputAtIndex(flatIndex : i32, value : ${z(e)}) {
      result[flatIndex] = ${o}(value);
    }

    fn setOutputAtIndexI32(flatIndex : i32, value : ${z(e,"i32")}) {
      result[flatIndex] = ${o}(value);
    }
    `;if(i>=2){const a=["d0","d1","d2","d3","d4","d5"].slice(0,i),n=B(i);r+=`
      fn setOutputAtCoords(${a.map(u=>`${u} : i32`).join(", ")}, value : ${z(e)}) {
        let flatIndex = getOutputIndexFromCoords(${n}(${a.join(", ")}));
        setOutputAtIndex(flatIndex${e===1?"":` / ${e}`}, value);
      }
      fn setOutputAtCoordsI32(${a.map(u=>`${u} : i32`).join(", ")}, value : ${z(e,"i32")}) {
        let flatIndex = getOutputIndexFromCoords(${n}(${a.join(", ")}));
        setOutputAtIndexI32(flatIndex${e===1?"":` / ${e}`}, value);
      }
    `}return r}function fa(s){const t=/(\w+)\s*:\s*vec(5|6)/g;s=s.replace(t,i=>"@align(16) "+i);const e=/vec(5|6)\s*,\s*(\w+)/g;return s=s.replace(e,(i,o,r)=>`vec${o}, @align(16) ${r}`),s}function wt(s){return!(s.dispatchLayout.hasOwnProperty("y")&&s.dispatchLayout.y.length!==0||s.dispatchLayout.hasOwnProperty("z")&&s.dispatchLayout.z.length!==0)}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ie=s=>{let t=1;for(let e=0;e<s.length;e++)t*=s[e];return t};function ma(s,t){if(s.length!==t.length)throw new Error(`Cannot compute whether rank ${s.length} tiles fit evenly into rank ${t.length} shape - ranks must match.`);return t.every((e,i)=>e%s[i]===0)}function S(s,t,e=[1,1,1],i=[1,1,1]){const[o,r,a]=[Math.ceil(ie(s.x.map(n=>t[n]))/(e[0]*i[0])),s.y?Math.ceil(ie(s.y.map(n=>t[n]))/(e[1]*i[1])):1,s.z?Math.ceil(ie(s.z.map(n=>t[n]))/(e[2]*i[2])):1];return[o,r,a]}function Bt(s,t,e,i=!1){const o=[8,8,1],r=[4,4,1];return i||(s<=8&&(r[1]=1),t<=16&&e<=16&&(o[0]=4)),{workgroupSize:o,elementsPerThread:r}}function tt(s,t,e=!1){if(e)return[8,8,1];const i=ie(s.x.map(r=>t[r])),o=ie(s.y.map(r=>t[r]));return i<=4?[4,16,1]:o<=4?[16,4,1]:[16,16,1]}function st(s,t,e=!1){if(e)return[4,4,1];const i=ie(s.x.map(r=>t[r])),o=ie(s.y.map(r=>t[r]));return i<=4?[1,2,1]:o<=4?[2,1,1]:[2,2,1]}function I(s){return{x:s.map((t,e)=>e)}}function He(s){if(s==="float32"||s==="int32"||s==="bool"||s==="string")return 4;if(s==="complex64")return 8;throw new Error(`Unknown dtype ${s}`)}function ot(){return!!(typeof globalThis<"u"&&globalThis.navigator&&globalThis.navigator.gpu)}function it(s,t){Array.isArray(s)||(s=[s]),s.forEach(e=>{e!=null&&E(e.dtype!=="complex64",()=>`${t} does not support complex64 tensors in the WebGPU backend.`)})}var Y;(function(s){s[s.MatMulReduceProgram=0]="MatMulReduceProgram",s[s.MatMulSplitKProgram=1]="MatMulSplitKProgram",s[s.MatMulSmallOutputSizeProgram=2]="MatMulSmallOutputSizeProgram",s[s.MatMulPackedProgram=3]="MatMulPackedProgram",s[s.MatMulMax=4]="MatMulMax"})(Y||(Y={}));const Fm=Object.freeze(Object.defineProperty({__proto__:null,GPUBytesPerElement:He,get MatMulProgramType(){return Y},assertNotComplex:it,computeDispatch:S,computeWorkPerThreadForConv2d:st,computeWorkgroupInfoForMatMul:Bt,computeWorkgroupSizeForConv2d:tt,flatDispatchLayout:I,isWebGPUSupported:ot,tilesFitEvenlyIntoShape:ma},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ga=V().getNumber("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD"),xa=(s,t)=>{const e=s.limits.maxComputeWorkgroupsPerDimension,i=t.dispatchLayout,o=t.dispatch;if(o.every(a=>a<=e))return o;E(o[0]>e&&i.y===void 0&&i.z===void 0,()=>"Dispatch size exceeds WebGPU limits in Y or Z dimension.");let r=Math.ceil(Math.sqrt(o[0]));return r>e?(r=Math.ceil(Math.cbrt(o[0])),E(r<=e,()=>"Total dispatch size exceeds WebGPU maximum."),[r,r,r]):[r,r,1]};class _e extends us{nextDataId(){return _e.nextDataId++}constructor(t,e){if(super(),this.commandQueueOwnedIds=new WeakSet,this.dispatchCountInPass=0,this.disposed=!1,this.downloadWaitMs=0,this.tensorDataPendingDisposal=[],this.queryResolveBuffer=null,this.querySet=null,this.querySetCount=2,this.stagingPendingDisposal=[],this.uniformPendingDisposal=[],this.uploadWaitMs=0,this.hasReadSyncWarned=!1,this.hasTimestampQueryWarned=!1,!ot())throw new Error("WebGPU is not supported on this device");this.pipelineCache={},this.device=t,this.queue=t.queue,this.commandEncoder=null,this.computePassEncoder=null,this.adapterInfo=new Jr(e),this.supportTimestampQuery=this.device.features.has("timestamp-query"),this.thresholdToIncreaseWorkgroups=this.adapterInfo.intelGPUGeneration>=12?16:8,this.bufferManager=new ea(this.device),this.textureManager=new ta(this.device),this.tensorMap=new ds(this,Me()),V().getBool("WEBGPU_USE_PROFILE_TOOL")&&(this.dummyCanvas=document.createElement("canvas"),this.dummyCanvas.width=1,this.dummyCanvas.height=1,this.dummyContext=this.dummyCanvas.getContext("webgpu"),this.dummyContext.configure({device:t,format:"bgra8unorm"}),document.body.appendChild(this.dummyCanvas))}floatPrecision(){return 32}disposeData(t,e=!1){if(!this.tensorMap.has(t))return!0;const i=this.tensorMap.get(t);return e?i.refCount=0:i.refCount--,i.refCount>0?!1:(i.complexTensorInfos!=null&&(this.disposeData(i.complexTensorInfos.real.dataId),this.disposeData(i.complexTensorInfos.imag.dataId)),this.commandQueueOwnedIds.has(t)?(this.tensorDataPendingDisposal.push(t),!0):(this.releaseResource(t),this.tensorMap.delete(t),!0))}memory(){return{numBytesInGPU:this.bufferManager.numBytesUsed,numBytesAllocatedInGPU:this.bufferManager.numBytesAllocated,unreliable:!1}}releaseResource(t){const e=this.tensorMap.get(t);if(!(!e||!e.resource)){if(e.external){e.resource=null;return}e.resource instanceof GPUBuffer?this.bufferManager.releaseBuffer(e.resource):e.resource instanceof GPUTexture&&this.textureManager.releaseTexture(e.resource),e.resource=null}}refCount(t){return this.tensorMap.has(t)?this.tensorMap.get(t).refCount:0}incRef(t){const e=this.tensorMap.get(t);e.refCount++}decRef(t){if(this.tensorMap.has(t)){const e=this.tensorMap.get(t);e.refCount--}}write(t,e,i){if(i==="complex64"&&t!=null)throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");const o={id:this.nextDataId()};return this.tensorMap.set(o,{dtype:i,shape:e,values:t,refCount:1}),o}move(t,e,i,o,r){if(o==="complex64")throw new Error("Cannot write to a complex64 dtype. Please use tf.complex(real, imag).");this.tensorMap.set(t,{dtype:o,shape:i,values:e,refCount:r})}submitQueue(){this.queue.submit([this.commandEncoder.finish()]),this.commandEncoder=null,this.dispatchCountInPass=0,this.commandQueueOwnedIds=new WeakSet,this.tensorDataPendingDisposal.forEach(t=>{this.releaseResource(t),this.tensorMap.delete(t)}),this.uniformPendingDisposal.forEach(t=>this.bufferManager.releaseBuffer(t)),this.stagingPendingDisposal.forEach(t=>this.bufferManager.releaseBuffer(t,!1)),this.tensorDataPendingDisposal=[],this.uniformPendingDisposal=[],this.stagingPendingDisposal=[]}ensureCommandEncoderReady(){this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder())}endComputePassEncoder(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}async checkCompileCompletionAsync(){let t;try{t=await Promise.all(Object.values(this.pipelineCache))}catch(e){throw new Error(e.message)}Object.keys(this.pipelineCache).map((e,i)=>{this.pipelineCache[e]=t[i]})}async getBufferData(t){if(V().getBool("WEBGPU_ENGINE_COMPILE_ONLY"))return console.warn("The data may be invalid since WEBGPU_ENGINE_COMPILE_ONLY is true, this can only be called when WEBGPU_ENGINE_COMPILE_ONLY is false"),null;const e=t.size,i=this.bufferManager.acquireBuffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,i,0,e),this.submitQueue(),await i.mapAsync(GPUMapMode.READ);const o=i.getMappedRange().slice(0);return i.unmap(),i!=null&&this.bufferManager.releaseBuffer(i),V().getBool("WEBGPU_USE_PROFILE_TOOL")&&(E(this.dummyContext!==void 0,()=>"Fail to get context for profiling tool"),this.dummyContext.getCurrentTexture()),o}convertAndCacheOnCPU(t,e){const i=this.tensorMap.get(t);return i.values=e,i.values}readSync(t){const e=this.tensorMap.get(t),{values:i,complexTensorInfos:o}=e;if(i!=null||e.dtype==="string")return i;if(e.dtype==="complex64"){const m=this.readSync(o.real.dataId),g=this.readSync(o.imag.dataId),x=Oe(lt(m,g).buffer,"float32");return this.convertAndCacheOnCPU(t,x),x}this.hasReadSyncWarned||(this.hasReadSyncWarned=!0,console.warn("The performance of synchronously reading data from GPU to CPU is poor on the webgpu backend, please use asynchronous APIs instead."));const r=["opaque","premultiplied"],a=e.resource,n=a.size;E(n%4===0,()=>"Because there is 4 bytes for one pixel, buffer size must be multiple of 4.");const u=n/4,d=new ArrayBuffer(n),l=256,h=256,c=r.map(m=>new OffscreenCanvas(l,h)),p=new OffscreenCanvas(l,h);this.endComputePassEncoder(),c.map((m,g)=>{const x=m.getContext("webgpu");return x.configure({device:this.device,format:"bgra8unorm",usage:GPUTextureUsage.COPY_DST,alphaMode:r[g]}),x.getCurrentTexture()}).map((m,g)=>{const x=l*4,C=(F,A,_)=>{this.ensureCommandEncoderReady(),this.commandEncoder.copyBufferToTexture({buffer:a,bytesPerRow:x,offset:_},{texture:m},{width:F,height:A}),this.submitQueue();const W=p.getContext("2d",{willReadFrequently:!0});W.clearRect(0,0,F,A),W.drawImage(c[g],0,0);const H=W.getImageData(0,0,F,A).data,O=r[g],T=new Uint8ClampedArray(d,_,F*A*4);for(let M=0;M<T.length;M+=4)if(O==="premultiplied")T[M+3]=H[M+3];else{const G=H[M];T[M]=H[M+2],T[M+1]=H[M+1],T[M+2]=G}},w=Math.floor(u/(l*h));let v=l,k=h,P=0;for(let F=0;F<w;F++)C(v,k,P),P+=l*h*4;const D=u%(l*h);k=Math.floor(D/l),k>0&&(C(v,k,P),P+=k*(l*4)),v=D%l,v>0&&C(v,1,P)});const f=Oe(d,e.dtype);return this.convertAndCacheOnCPU(t,f),f}async read(t){if(!this.tensorMap.has(t))throw new Error(`Tensor ${t} was not registered!`);const e=this.tensorMap.get(t),{values:i}=e;if(i!=null)return i;let o;if(e.dtype==="complex64"){const r=await Promise.all([this.read(e.complexTensorInfos.real.dataId),this.read(e.complexTensorInfos.imag.dataId)]),a=r[0],n=r[1];o=lt(a,n)}else{const r=await this.getBufferData(e.resource);o=Oe(r,e.dtype)}return this.convertAndCacheOnCPU(t,o),o}copyBuffer(t){const e=t.size,i=t.usage,o=this.bufferManager.acquireBuffer(e,i);return this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(t,0,o,0,e),this.submitQueue(),o}createTensorFromGPUData(t,e,i){let o=t.buffer;if(i==="complex64")throw new Error("Cannot write to a complex64 dtype. ");const r={id:this.nextDataId()};this.tensorMap.set(r,{dtype:i,shape:e,values:null,refCount:1,external:t.zeroCopy});const a=this.tensorMap.get(r),n=He(a.dtype)*N(a.shape);if(t.buffer.size<n)throw new Error(`GPUBuffer size(${t.buffer.size}) is smaller than tensor size(${n})!`);if((t.buffer.usage&(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))!==(GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC))throw new Error("GPUBuffer.usage should include GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC!");return t.zeroCopy!==!0&&(o=this.copyBuffer(o)),a.resource=o,Me().makeTensorFromDataId(r,e,i,this)}readToGPU(t){const e=this.tensorMap.get(t),{values:i,dtype:o,shape:r,resource:a}=e;if(o==="complex64")throw new Error("Does not support reading buffer for complex64 dtype.");if(a==null)throw i!=null?new Error("Data is not on GPU but on CPU."):new Error("There is no data on GPU or CPU.");const n=a,u=n.size,d=n.usage,l=this.bufferManager.acquireBuffer(u,d);this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(a,0,l,0,u),this.submitQueue();const h=this.makeTensorInfo(r,o),c=Me().makeTensorFromTensorInfo(h),p=this.tensorMap.get(h.dataId);return p.resource=l,{tensorRef:c,buffer:l}}bufferSync(t){const e=this.readSync(t.dataId);if(t.dtype==="string")try{const i=e.map(o=>Ye(o));return he(t.shape,t.dtype,i)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return he(t.shape,t.dtype,e)}async time(t){!this.supportTimestampQuery&&!this.hasTimestampQueryWarned&&(console.warn("This device doesn't support timestamp-query extension. Start Chrome browser with flag --enable-dawn-features=allow_unsafe_apis to try it again. Otherwise, zero will be shown for the kernel time when profiling mode is enabled."),this.hasTimestampQueryWarned=!0);const e=this.activeTimers,i=[];let o=!1;this.programTimersStack==null?(this.programTimersStack=i,o=!0):this.activeTimers.push(i),this.activeTimers=i,t();const r=ct(this.activeTimers.map(d=>d.query)).filter(d=>d!=null),a=ct(this.activeTimers.map(d=>d.name)).filter(d=>d!=null);this.activeTimers=e,o&&(this.programTimersStack=null);const n={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null},u=await Promise.all(r);return n.kernelMs=ls(u),n.getExtraProfileInfo=()=>u.map((d,l)=>({name:a[l],ms:d})).map(d=>`${d.name}: ${d.ms}`).join(", "),this.uploadWaitMs=0,this.downloadWaitMs=0,n}makeTensorInfo(t,e,i){return e==="string"&&i!=null&&i.length>0&&cs(i[0])&&(i=i.map(r=>hs(r))),{dataId:this.write(i,t,e),shape:t,dtype:e}}tensorToBinding(t){if(!t)return null;const i=this.tensorMap.get(t.dataId).resource;return i instanceof GPUBuffer?{buffer:i}:i instanceof GPUTexture?i.createView():i}uploadToGPU(t){const e=this.tensorMap.get(t);if(e.resource!=null)return;const i=He(e.dtype)*N(e.shape);let o;const r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST;if(e.values){if(o=this.bufferManager.acquireBuffer(i,r,!0),o.mapState==="unmapped"){const a=this.bufferManager.acquireBuffer(i,GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC,!0,!1),n=a.getMappedRange();e.dtype==="int32"||e.dtype==="bool"?new Int32Array(n).set(e.values):new Float32Array(n).set(e.values),a.unmap(),this.ensureCommandEncoderReady(),this.endComputePassEncoder(),this.commandEncoder.copyBufferToBuffer(a,0,o,0,i),this.stagingPendingDisposal.push(a)}else{const a=o.getMappedRange();e.dtype==="int32"||e.dtype==="bool"?new Int32Array(a).set(e.values):new Float32Array(a).set(e.values),o.unmap()}e.values=null}else o=this.bufferManager.acquireBuffer(i,r);e.resource=o}makeUniforms(t){let e=0,i=0;const o=[];let r=1;t.forEach(u=>{u.data.length===0&&(u.data=[1]);let d;switch(u.data.length){case 1:d=4;break;case 2:d=8;break;case 3:d=16;break;case 4:d=16;break;case 5:d=16;break;case 6:d=16;break;default:E(!1,()=>`Unsupported ${u.data.length}D shape`)}(i===5||i===6)&&(d=16),d>r&&(r=d),e=Math.ceil(e/d)*d,i=u.data.length,o.push(e),e+=u.data.length*4}),e=Math.ceil(e/r)*r;const a=new ArrayBuffer(e);t.forEach((u,d)=>{const l=o[d];u.type==="int32"?new Int32Array(a,l,u.data.length).set(u.data):u.type==="uint32"?new Uint32Array(a,l,u.data.length).set(u.data):new Float32Array(a,l,u.data.length).set(u.data)});const n=this.bufferManager.acquireBuffer(e,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);return this.queue.writeBuffer(n,0,a,0,e),this.uniformPendingDisposal.push(n),{offset:0,size:e,buffer:n}}runWebGPUProgram(t,e,i,o,r){if(r||(r=this.makeTensorInfo(t.outputShape,i)),N(r.shape)===0)return this.tensorMap.get(r.dataId).values=Dt(r.dtype,0),r;this.uploadToGPU(r.dataId),t.dispatch=xa(this.device,t);const a=e.map((u,d)=>{if(u.dtype==="complex64")throw new Error("GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.");return this.uploadToGPU(u.dataId),{dtype:this.tensorMap.get(u.dataId).dtype,shape:u.shape,name:t.variableNames[d]}});t.shaderKey=aa(t,a,r);const n=V().getBool("WEBGPU_ENGINE_COMPILE_ONLY");return t.shaderKey in this.pipelineCache||(this.pipelineCache[t.shaderKey]=oa(this.device,t,a,r,n)),t.pipeline=this.pipelineCache[t.shaderKey],n||this.recordAndSubmit(t,r,e,o),r}recordAndSubmit(t,e,i,o){if(t.pipeline instanceof Promise)throw new Error("Please call checkCompileCompletionAsync to ensure parallel compilation is done!");let r=[],a=[];const n="int32";if(t.pixelsOpType==null){r.push({type:"float32",data:[NaN]},{type:"float32",data:[1/0]}),a=i.concat(e).map(p=>p.shape);const c="int32";a.map(p=>{r.push({type:c,data:p});const f=ye(p);r.push({type:c,data:f})})}else{const c=ye(e.shape);r.push({type:n,data:c})}if(t.size){const c=N(t.outputShape);r.push({type:n,data:[t.outputComponent?c/t.outputComponent:c]})}o&&(r=[...r,...o]);const u=[this.tensorToBinding(e),...i.map(c=>this.tensorToBinding(c)),this.makeUniforms(r)];i.forEach(c=>{this.commandQueueOwnedIds.add(c.dataId)}),this.commandQueueOwnedIds.add(e.dataId);const d=this.device.createBindGroup({layout:t.pipeline.getBindGroupLayout(0),entries:u.map((c,p)=>({binding:p,resource:c}))}),l=this.activeTimers!=null;this.ensureCommandEncoderReady();const h={};l&&this.supportTimestampQuery?(this.endComputePassEncoder(),this.querySet==null&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.querySetCount})),h.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:0,endOfPassWriteIndex:1},this.computePassEncoder=this.commandEncoder.beginComputePass(h)):this.computePassEncoder||(this.computePassEncoder=this.commandEncoder.beginComputePass(h)),this.computePassEncoder.setPipeline(t.pipeline),this.computePassEncoder.setBindGroup(0,d),this.computePassEncoder.dispatchWorkgroups(t.dispatch[0],t.dispatch[1],t.dispatch[2]),this.dispatchCountInPass++,(l||V().get("WEBGPU_DEFERRED_SUBMIT_BATCH_SIZE")<=this.dispatchCountInPass||t.pixelsOpType===pe.DRAW)&&(this.endComputePassEncoder(),l?this.activeTimers.push({name:t.constructor.name,query:this.getQueryTime()}):this.submitQueue())}async getQueryTime(){if(!this.supportTimestampQuery)return 0;this.queryResolveBuffer==null&&(this.queryResolveBuffer=this.bufferManager.acquireBuffer(this.querySetCount*8,GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST|GPUBufferUsage.QUERY_RESOLVE)),this.commandEncoder.resolveQuerySet(this.querySet,0,this.querySetCount,this.queryResolveBuffer,0);const t=this.bufferManager.acquireBuffer(this.querySetCount*8,GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST);this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,t,0,this.querySetCount*8),this.submitQueue(),await t.mapAsync(GPUMapMode.READ);const e=new BigUint64Array(t.getMappedRange()),i=Number(e[1]-e[0])/1e6;return t.unmap(),this.bufferManager.releaseBuffer(t),i}shouldExecuteOnCPU(t,e=ga){return V().getBool("WEBGPU_CPU_FORWARD")&&t.every(i=>this.tensorMap.get(i.dataId).resource==null&&N(i.shape)<e)}numDataIds(){return this.tensorMap.numDataIds()-this.tensorDataPendingDisposal.length}dispose(){this.disposed||(this.querySet!=null&&this.querySet.destroy(),this.bufferManager.dispose(),this.textureManager.dispose(),this.disposed=!0)}}_e.nextDataId=0;/**
 * @license
 * Copyright 2022 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ot()&&ps("webgpu",async()=>{const s={powerPreference:V().get("WEBGPU_USE_LOW_POWER_GPU")?"low-power":"high-performance"},t=await navigator.gpu.requestAdapter(s),e={},i=[];t.features.has("timestamp-query")&&i.push("timestamp-query"),t.features.has("bgra8unorm-storage")&&i.push(["bgra8unorm-storage"]),e.requiredFeatures=i;const o=t.limits;e.requiredLimits={maxComputeWorkgroupStorageSize:o.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:o.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:o.maxStorageBufferBindingSize,maxBufferSize:o.maxBufferSize,maxComputeWorkgroupSizeX:o.maxComputeWorkgroupSizeX,maxComputeInvocationsPerWorkgroup:o.maxComputeInvocationsPerWorkgroup};const r=await t.requestDevice(e),a="info"in t?t.info:"requestAdapterInfo"in t?await t.requestAdapterInfo():void 0;return new _e(r,a)},3);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var $;(function(s){s[s.ADD=0]="ADD",s[s.ATAN2=1]="ATAN2",s[s.COMPLEX_MULTIPLY_IMAG=2]="COMPLEX_MULTIPLY_IMAG",s[s.COMPLEX_MULTIPLY_REAL=3]="COMPLEX_MULTIPLY_REAL",s[s.DIV=4]="DIV",s[s.ELU_DER=5]="ELU_DER",s[s.EQUAL=6]="EQUAL",s[s.FLOOR_DIV=7]="FLOOR_DIV",s[s.GREATER=8]="GREATER",s[s.GREATER_EQUAL=9]="GREATER_EQUAL",s[s.LESS=10]="LESS",s[s.LESS_EQUAL=11]="LESS_EQUAL",s[s.LOGICAL_AND=12]="LOGICAL_AND",s[s.LOGICAL_OR=13]="LOGICAL_OR",s[s.MAX=14]="MAX",s[s.MIN=15]="MIN",s[s.MOD=16]="MOD",s[s.MUL=17]="MUL",s[s.NOT_EQUAL=18]="NOT_EQUAL",s[s.POW=19]="POW",s[s.PRELU=20]="PRELU",s[s.SQUARED_DIFFERENCE=21]="SQUARED_DIFFERENCE",s[s.SUB=22]="SUB"})($||($={}));const Ca="let resultTemp = a + b;",wa="let resultTemp = atan2(a, b);",ba="let resultTemp = areal * breal - aimag * bimag;",ya="let resultTemp = areal * bimag + aimag * breal;",Sa="let resultTemp = a / b;",va="let resultTemp = select(a * (b + 1.0), a, b >= b - b);",Ia=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a == b);
`,ka=`
  let remainder =
      select(a % b, round(a % b), (round(a) == a) & (round(b) == b));
  let quotient = (a - remainder) / b;
  let resultTemp =
      round(select(quotient, quotient - 1, sign(remainder) == -sign(b)));
`,Ra=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a > b);
`,Pa=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a >= b);
`,$a=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a < b);
`,Da=`
  let zero = sign(a) * 0 + 0;
  let one = sign(b) * 0 + 1;
  let resultTemp = select(zero, one, a <= b);
`,Na="return f32(a >= 1.0 && b >= 1.0);",za=`return (vec4<f32>(a >= vec4<f32>(1.0)) *
  vec4<f32>(b >= vec4<f32>(1.0)));`,Aa="return f32(a >= 1.0 || b >= 1.0);",Fa=`return min(vec4<f32>(a >= vec4<f32>(1.0)) +
  vec4<f32>(b >= vec4<f32>(1.0)), vec4<f32>(1.0));`,La="let resultTemp = max(a, b);",Ea="let resultTemp = min(a, b);",Ba=`
  let isNaN = b == 0.;
  var resultTemp = a % b;
  resultTemp = select((resultTemp + b) % b, resultTemp,
      (a < 0. && b < 0.) || (a >= 0. && b > 0.));
`,_a=`
  let isNaN = !vec4<bool>(b);
  var resultTemp = vec4<f32>(a % b);
  if (!((a[0] < 0. && b[0] < 0.) || (a[0] >= 0. && b[0] > 0.))) {
    resultTemp[0] = (resultTemp[0] + b[0]) % b[0];
  }
  if (!((a[1] < 0. && b[1] < 0.) || (a[1] >= 0. && b[1] > 0.))) {
    resultTemp[1] = (resultTemp[1] + b[1]) % b[1];
  }
  if (!((a[2] < 0. && b[2] < 0.) || (a[2] >= 0. && b[2] > 0.))) {
    resultTemp[2] = (resultTemp[2] + b[2]) % b[2];
  }
  if (!((a[3] < 0. && b[3] < 0.) || (a[3] >= 0. && b[3] > 0.))) {
    resultTemp[3] = (resultTemp[3] + b[3]) % b[3];
  }
`,Wa="let resultTemp = a * b;",Ta=`
  var resultTemp = f32(a != b);
  let valueForNaN = 1.0;
`,Va=`
  var resultTemp = vec4<f32>(a != b);
  let valueForNaN = 1.0;
`,Ua=`
  let isNaN = a < 0.0 && floor(b) < b;
  if (b == 0.0) {
    return 1.0;
  }
  var resultTemp = select(sign(a) * pow(abs(a), b), pow(abs(a), b),
      round(abs(b) % 2.0) != 1.0);
`,Ma=`
  let isModRound1Bool = vec4<i32>(round(abs(b) % vec4<f32>(2.0))) == vec4<i32>(1);
  let isModRound1 = vec4<f32>(isModRound1Bool);
  let multiplier = sign(a) * isModRound1 + (vec4<f32>(1.0) - isModRound1);
  var resultTemp = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  let isExpZero = b == vec4<f32>(0.0);
  if (isExpZero.r) {
    resultTemp.r = 1.0;
  }
  if (isExpZero.g) {
    resultTemp.g = 1.0;
  }
  if (isExpZero.b) {
    resultTemp.b = 1.0;
  }
  if (isExpZero.a) {
    resultTemp.a = 1.0;
  }
  let isNaN = (a < vec4<f32>(0.0)) & (floor(b) < b);
`,Oa="if (a < 0.0) { return b * a; }  return a;",Ga=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (b * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`,Ha="let resultTemp = (a - b) * (a - b);",Xa="let resultTemp = a - b;";function rt(s,t){let e;do{switch(s){case $.ATAN2:e=wa;break;case $.MAX:e=La;break;case $.MIN:e=Ea;break;case $.MOD:e=t?_a:Ba;break;case $.NOT_EQUAL:e=t?Va:Ta;break;case $.POW:e=t?Ma:Ua;break;default:continue}let i,o,r;return t?(i="isnanVec4",o="vec4<f32>",r="vec4<bool>"):(i="isnan",o="f32",r="bool"),`
      let aIsNaN = ${i}(a);
      let aPostLegalization = select(a, ${o}(42), aIsNaN);
      let bIsNaN = ${i}(b);
      let bPostLegalization = select(b, ${o}(42), bIsNaN);
      let isNaN = false;
      let valueForNaN = uniforms.NAN;
      {
        let a = aPostLegalization;
        let b = bPostLegalization;
        ${e}
        return select(
            resultTemp, ${o}(valueForNaN),
            ${r}(isNaN) | aIsNaN | bIsNaN);
      }
    `}while(!1);switch(s){case $.ADD:e=Ca;break;case $.COMPLEX_MULTIPLY_IMAG:e=ya;break;case $.COMPLEX_MULTIPLY_REAL:e=ba;break;case $.DIV:e=Sa;break;case $.ELU_DER:e=va;break;case $.EQUAL:e=Ia;break;case $.FLOOR_DIV:e=ka;break;case $.GREATER:e=Ra;break;case $.GREATER_EQUAL:e=Pa;break;case $.LESS:e=$a;break;case $.LESS_EQUAL:e=Da;break;case $.LOGICAL_AND:return t?za:Na;case $.LOGICAL_OR:return t?Fa:Aa;case $.MUL:e=Wa;break;case $.PRELU:return t?Ga:Oa;case $.SQUARED_DIFFERENCE:e=Ha;break;case $.SUB:e=Xa;break}return`
    ${e}
    return resultTemp;
  `}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var b;(function(s){s[s.ABS=0]="ABS",s[s.ACOS=1]="ACOS",s[s.ACOSH=2]="ACOSH",s[s.ASIN=3]="ASIN",s[s.ASINH=4]="ASINH",s[s.ATAN=5]="ATAN",s[s.ATANH=6]="ATANH",s[s.CEIL=7]="CEIL",s[s.COS=8]="COS",s[s.COSH=9]="COSH",s[s.ELU=10]="ELU",s[s.ERF=11]="ERF",s[s.EXP=12]="EXP",s[s.EXPM1=13]="EXPM1",s[s.FLOOR=14]="FLOOR",s[s.IS_FINITE=15]="IS_FINITE",s[s.IS_INF=16]="IS_INF",s[s.IS_NAN=17]="IS_NAN",s[s.LINEAR=18]="LINEAR",s[s.LOG=19]="LOG",s[s.LOG1P=20]="LOG1P",s[s.LOGICAL_NOT=21]="LOGICAL_NOT",s[s.NEG=22]="NEG",s[s.RELU=23]="RELU",s[s.RELU6=24]="RELU6",s[s.LEAKYRELU=25]="LEAKYRELU",s[s.RECIPROCAL=26]="RECIPROCAL",s[s.ROUND=27]="ROUND",s[s.RSQRT=28]="RSQRT",s[s.SELU=29]="SELU",s[s.SIGMOID=30]="SIGMOID",s[s.SIGN=31]="SIGN",s[s.SIN=32]="SIN",s[s.SINH=33]="SINH",s[s.SOFTPLUS=34]="SOFTPLUS",s[s.SQRT=35]="SQRT",s[s.SQUARE=36]="SQUARE",s[s.STEP=37]="STEP",s[s.TAN=38]="TAN",s[s.TANH=39]="TANH",s[s.TO_INT=40]="TO_INT"})(b||(b={}));const Ka="return abs(a);",qa=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return acos(a);
`,Ya=`
  if (a < 1.) {
    return uniforms.NAN;
  }
  return acosh(a);
`,ja=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  return asin(a);
`,Qa="return asinh(a);",Za=`
  if (isnan(a)) {
    return uniforms.NAN;
  }
  return atan(a);
`,Ja=`
  if (abs(a) > 1.) {
    return uniforms.NAN;
  }
  if (a == 1.) {
    return uniforms.INFINITY;
  }
  if (a == -1.) {
    return -uniforms.INFINITY;
  }
  return atanh(a);
`,en="return ceil(a);",tn="return cos(a);",sn=`
  let e2x = exp(-a);
  return (e2x + 1.0 / e2x) / 2.0;
`,on="return exp(a) - 1.0;",rn="if (a >= 0.0) { return a; }  return (exp(a) - 1.0);",an=`
  var resFloat = exp(a) - vec4<f32>(1.0);
  if (a.r >= 0.0) {
    resFloat.r = a.r;
  }
  if (a.g >= 0.0) {
    resFloat.g = a.g;
  }
  if (a.b >= 0.0) {
    resFloat.b = a.b;
  }
  if (a.a >= 0.0) {
    resFloat.a = a.a;
  }
  return resFloat;
`,nn=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  let p = ${gs};
  let a1 = ${xs};
  let a2 = ${Cs};
  let a3 = ${ws};
  let a4 = ${bs};
  let a5 = ${ys};

  let sign = sign(a);
  let absA = abs(a);
  let t = 1.0 / (1.0 + p * absA);
  return sign * (1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * exp(-absA * absA));
`,un="return exp(a);",dn="return floor(a);",ln="return f32(!isnan(a) && !isinf(a));",cn="return f32(isinf(a));",hn="return f32(isnan(a));",pn="return a;",fn=`if (a < 0.0) { return uniforms.NAN; }
  return log(a);`,mn=`
  if (isnan(a)) { return a; }
  return log(1.0 + a);
`,gn="return f32(!(a >= 1.0));",xn="return -a;",Cn="if (a < 0.0) { return uniforms.alpha * a; } return a;",wn=`
  let aLessThanZero = vec4<f32>(a < vec4<f32>(0.0));
  return (aLessThanZero * (uniforms.alpha * a)) + ((vec4<f32>(1.0) - aLessThanZero) * a);
`,bn="return 1.0 / a;",yn="return select(a, 0.0, a < 0.0);",Sn="return clamp(a, 0.0, 6.0);",vn="return clamp(a, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(6.0, 6.0, 6.0, 6.0));",In=`
  return select(a, vec4<f32>(0.0), a < vec4<f32>(0.0));
`,kn="return round(a);",Rn="return inverseSqrt(a);",Pn=`
  if (a >= 0.0) {
    return ${fs} * a;
  } else {
    return ${ms} * (exp(a) - 1.0);
  }
`,$n="return 1.0 / (1.0 + exp(-1.0 * a));",Dn="return sign(a);",Nn="return sin(a);",zn=`
  let e2x = exp(a);
  return (e2x - 1.0 / e2x) / 2.0;
`,An=`
  let epsilon = 1.1920928955078125e-7;
  let threshold = log(epsilon) + 2.0;

  let too_large = a > -threshold;
  let too_small = a < threshold;
  let exp_a = exp(a);

  if (too_large) {
    return a;
  } else if (too_small) {
    return exp_a;
  } else {
    return log(exp_a + 1.0);
  }
`,Fn="return sqrt(a);",Ln="return a * a;",En=`
  if (isnan(a)) {
    return a;
  }

  return select(uniforms.stepAlpha, 1.0, a > 0.0);
`,Bn="return tan(a);",_n=`
  let e2x = exp(-2.0 * abs(a));
  return sign(a) * (1.0 - e2x) / (1.0 + e2x);
`,Wn="return f32(i32((a)));";function se(s,t){switch(s){case b.ABS:return Ka;case b.ACOS:return qa;case b.ACOSH:return Ya;case b.ASIN:return ja;case b.ASINH:return Qa;case b.ATAN:return Za;case b.ATANH:return Ja;case b.COS:return tn;case b.COSH:return sn;case b.CEIL:return en;case b.ELU:return t?an:rn;case b.ERF:return nn;case b.EXP:return un;case b.EXPM1:return on;case b.FLOOR:return dn;case b.IS_FINITE:return ln;case b.IS_INF:return cn;case b.IS_NAN:return hn;case b.LINEAR:return pn;case b.LOG:return fn;case b.LOG1P:return mn;case b.LOGICAL_NOT:return gn;case b.NEG:return xn;case b.LEAKYRELU:return t?wn:Cn;case b.RECIPROCAL:return bn;case b.RELU:return t?In:yn;case b.RELU6:return t?vn:Sn;case b.ROUND:return kn;case b.RSQRT:return Rn;case b.SELU:return Pn;case b.SIGMOID:return $n;case b.SIGN:return Dn;case b.SIN:return Nn;case b.SINH:return zn;case b.SOFTPLUS:return An;case b.SQRT:return Fn;case b.SQUARE:return Ln;case b.STEP:return En;case b.TAN:return Bn;case b.TANH:return _n;case b.TO_INT:return Wn;default:throw new Error(`BinaryType ${s} is not implemented!`)}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Z(s,t=!1,e=!1,i=3){if(s===null)return"";let o="";if(s==="linear")o=se(b.LINEAR);else if(s==="relu")o=se(b.RELU,e);else if(s==="elu")o=se(b.ELU,e);else if(s==="relu6")o=se(b.RELU6,e);else if(s==="prelu")o=rt($.PRELU,e);else if(s==="sigmoid")o=se(b.SIGMOID,e);else if(s==="leakyrelu")o=se(b.LEAKYRELU,e);else throw new Error(`Activation ${s} has not been implemented for the WebGPU backend.`);const a=z(e?4:1);let n="";return t?n=`
      fn activation(a : ${a}, coords : vec${i}<i32>) -> ${a} {
        let b = getPreluActivationWeightsByOutputCoords(coords);
        ${o}
      }`:n=`
      fn activation(a : ${a}, coords : vec${i}<i32>) -> ${a} {
        ${o}
      }`,n}function ae(s,t){return`
      ${s?"value = value + getBiasByOutputCoords(coords);":""}
      ${t?"value = activation(value, coords);":""}
      `}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _t(s,t,e=!1,i=!1,o=!1,r=1){E(s&&r===1||!s,()=>`transposeA ${s} is not compatible with component size ${r}`);const a=`
      ${s?"value = getA(batch, col, row);":"value = getA(batch, row, col);"}

    `,n=t?"value = getB(batch, col, row);":"value = getB(batch, row, col);";return`
  fn mm_readA(batch: i32, row: i32, col: i32) -> ${z(r)} {
    var value = ${z(r)}(0.0);
    ${e&&o?a:`
    ${s?"if(row < uniforms.dimAOuter && col < uniforms.dimInner)":"if(row < uniforms.aShape[1] && col < uniforms.aShape[2])"}
    {
      ${a}
    }
    `}
    return value;
  }

  fn mm_readB(batch: i32, row: i32, col: i32) -> ${z(r)} {
    var value = ${z(r)}(0.0);
    ${n}
    return value;
  }
  `}function at(s,t,e,i,o=!1,r=!1,a=!1,n=1){return`
  ${_t(e,i,o,r,a,n)}
  fn mm_write(batch: i32, row: i32, col: i32, valueIn: ${z(n)}) {
    ${o&&r?"":"if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)"}
    {
      var value = valueIn;
      let coords = vec3<i32>(batch, row, col);
      ${ae(s,t)}
      setOutputAtCoords(coords[0], coords[1], coords[2], value);
    }
  }
  `}const Tn=(s,t)=>s?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol * ${t});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRow + innerRow,
          kStart + inputCol * ${t});
        `,Vn=(s,t,e,i)=>{if(s)return`
      for (var k = 0; k < ${i}; k++) {
        let BCached0 = mm_Bsub[k][tileCol];
        let ACached0 = mm_Asub[k][localRow];
        for (var i = 0; i < ${e}; i++) {
          acc[i] = fma(BCached0, vec4<f32>(ACached0[i]), acc[i]);
        }
      }`;{let o="",r="";for(let a=0;a<t;a++)o+=`let BCached${a} = mm_Bsub[k * ${t} + ${a}][tileCol];`,r+=`acc[i] = fma(BCached${a}, vec4<f32>(ACached[${a}]), acc[i]);`;return`
      for (var k = 0; k < ${i/t}; k++) {
        ${o}
        for (var i = 0; i < ${e}; i++) {
          let ACached = mm_Asub[tileRow + i][k];
          ${r}
        }
      }`}};function We(s,t,e=!1,i=32,o=!1,r=32,a=!1){const n=t[1]*s[1],u=t[0]*s[0],d=e?n:i,l=e?i:n,h=d/t[0],c=i/t[1],p=s[1],f=s[0];return E((e&&h===4&&s[1]===4||!e&&(h===3||h===4))&&d%t[0]===0&&i%t[1]===0&&s[0]===4,()=>`If transposeA ${e} is true, innerElementSize ${h} and workPerThread[1] ${s[1]} must be 4.
          Otherwise, innerElementSize ${h} must be 3 or 4.
      tileAWidth ${d} must be divisible by workgroupSize[0]${t[0]}. tileInner ${i} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${s[0]} must be 4.`),`
  var<workgroup> mm_Asub : array<array<vec${h}<f32>, ${d/h}>, ${l}>;
  var<workgroup> mm_Bsub : array<array<vec4<f32>, ${u/s[0]}>, ${i}>;

  ${y()} {
    let localRow = i32(localId.y);
    let tileRow = localRow * ${p};
    let tileCol = i32(localId.x);

    let globalRow = i32(globalId.y) * ${p};
    let globalCol = i32(globalId.x) * ${f};
    let batch = ${o?"0":"i32(globalId.z)"};
    let batchA = ${o||!a?"batch":"batch % uniforms.aShape[0]"};
    let batchB = ${o||!a?"batch":"batch % uniforms.bShape[0]"};
    let globalRowStart = i32(workgroupId.y) * ${n};

    let numTiles = ${o?`${Math.ceil(r/i)}`:`(uniforms.dimInner - 1) / ${i} + 1`};
    var kStart = ${o?`i32(globalId.z) * ${r}`:"0"};

    var acc: array<vec4<f32>, ${p}>;

    // Loop over shared dimension.
    let tileRowB = localRow * ${c};
    for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var innerRow = 0; innerRow < ${p}; innerRow++) {
            let inputRow = tileRow + innerRow;
            let inputCol = tileCol;
            ${Tn(e,h)}
        }

        // Load one tile of B into local memory.
        for (var innerRow = 0; innerRow < ${c}; innerRow++) {
            let inputRow = tileRowB + innerRow;
            let inputCol = tileCol;
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB, kStart + inputRow, globalCol);
        }
        kStart = kStart + ${i};
        workgroupBarrier();

        // Compute acc values for a single thread.
        ${Vn(e,h,p,i)}
        workgroupBarrier();
    }

    for (var innerRow = 0; innerRow < ${p}; innerRow++) {
        mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
    }
  }`}const bt=s=>s?`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          kStart + inputRow,
          globalRowStart + inputCol);
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batchA,
          globalRowStart + inputRow,
          kStart + inputCol);
        `,Un=s=>s?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];";function Te(s,t,e=!1,i=32,o=!1,r=32,a=!1,n=!1){const u=s[1]*t[1],d=s[0]*t[0],l=e?u:i,h=e?i:u;E(h%t[1]===0&&l%t[0]===0&&i%t[1]===0,()=>`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${l} must be divisible by workgroupSize[0]${t[0]}, tileInner ${i} must be divisible by workgroupSize[1]${t[1]}`);const c=h/t[1],p=l/t[0],f=i/t[1],m=s[1],g=s[0],x=a?`
      let localRow = i32(localId.y);
      let localCol = i32(localId.x);
      let globalRowStart = i32(workgroupId.y) * ${u};
      let globalColStart = i32(workgroupId.x) * ${d};

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
          for (var inputCol = localCol; inputCol < ${l}; inputCol = inputCol + ${t[0]}) {
            ${bt(e)}
          }
        }
        // Load one tile of B into local memory.
        for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${t[1]}) {
              for (var inputCol = localCol; inputCol < ${d}; inputCol = inputCol + ${t[0]}) {
            mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
              kStart + inputRow,
              globalColStart + inputCol);
          }
        }
        kStart = kStart + ${i};
        workgroupBarrier();

        // Compute acc values for a single thread.
        var BCached : array<f32, ${g}>;
        for (var k = 0; k < ${i}; k++) {
          for (var inner = 0; inner < ${g}; inner++) {
            BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
          }
          for (var innerRow = 0; innerRow < ${m}; innerRow++) {
            let ACached = ${e?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
            for (var innerCol = 0; innerCol < ${g}; innerCol++) {
              acc[innerRow][innerCol] =
                  fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
            }
          }
        }
        workgroupBarrier();
      }
      for (var innerRow = 0; innerRow < ${m}; innerRow++) {
        let gRow = globalRowStart + localRow + innerRow * ${t[1]};
        for (var innerCol = 0; innerCol < ${g}; innerCol++) {
          let gCol = globalColStart + localCol + innerCol * ${t[0]};
          mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
        }
      }
      `:`
  let tileRow = i32(localId.y) * ${m};
  let tileCol = i32(localId.x) * ${g};

  let globalRow = i32(globalId.y) * ${m};
  let globalCol = i32(globalId.x) * ${g};
  let globalRowStart = i32(workgroupId.y) * ${u};

  let tileRowA = i32(localId.y) * ${c};
  let tileColA = i32(localId.x) * ${p};
  let tileRowB = i32(localId.y) * ${f};
  // Loop over shared dimension.
  for (var t = 0; t < numTiles; t++) {
    // Load one tile of A into local memory.
    for (var innerRow = 0; innerRow < ${c}; innerRow++) {
      for (var innerCol = 0; innerCol < ${p}; innerCol++) {
        let inputRow = tileRowA + innerRow;
        let inputCol = tileColA + innerCol;
        ${bt(e)}
      }
    }

    // Load one tile of B into local memory.
    for (var innerRow = 0; innerRow < ${f}; innerRow++) {
      for (var innerCol = 0; innerCol < ${g}; innerCol++) {
        let inputRow = tileRowB + innerRow;
        let inputCol = tileCol + innerCol;
        mm_Bsub[inputRow][inputCol] = mm_readB(batchB,
          kStart + inputRow,
          globalCol + innerCol);
      }
    }
    kStart = kStart + ${i};
    workgroupBarrier();

    // Compute acc values for a single thread.
    var BCached : array<f32, ${g}>;
    for (var k = 0; k < ${i}; k++) {
      for (var inner = 0; inner < ${g}; inner++) {
        BCached[inner] = mm_Bsub[k][tileCol + inner];
      }

      for (var innerRow = 0; innerRow < ${m}; innerRow++) {
        ${Un(e)}
        for (var innerCol = 0; innerCol < ${g}; innerCol++) {
          acc[innerRow][innerCol] =
              fma(ACached, BCached[innerCol], acc[innerRow][innerCol]);
        }
      }
    }

    workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < ${m}; innerRow++) {
    for (var innerCol = 0; innerCol < ${g}; innerCol++) {
      mm_write(batch, globalRow + innerRow, globalCol + innerCol,
          acc[innerRow][innerCol]);
    }
  }
  `;return`
    var<workgroup> mm_Asub : array<array<f32, ${l}>, ${h}>;
    var<workgroup> mm_Bsub : array<array<f32, ${d}>, ${i}>;

    ${y()} {
      let batch = ${o?"0":"i32(globalId.z)"};
      let batchA = ${o||!n?"batch":"batch % uniforms.aShape[0]"};
      let batchB = ${o||!n?"batch":"batch % uniforms.bShape[0]"};
      let numTiles = ${o?`${Math.ceil(r/i)}`:`(uniforms.dimInner - 1) / ${i} + 1`};
      var kStart = ${o?`i32(globalId.z) * ${r}`:"0"};

      var acc : array<array<f32, ${g}>, ${m}>;

      // Without this initialization strange values show up in acc.
      for (var innerRow = 0; innerRow < ${m}; innerRow++) {
        for (var innerCol = 0; innerCol < ${g}; innerCol++) {
          acc[innerRow][innerCol] = 0.0;
        }
      }
      ${x}
    }
  `}const Mn=s=>s?`
      mm_readA(batchA, colA, globalRow),
      mm_readA(batchA, colA + 1, globalRow),
      mm_readA(batchA, colA + 2, globalRow),
      mm_readA(batchA, colA + 3, globalRow)
  `:`
      mm_readA(batchA, globalRow, colA),
      mm_readA(batchA, globalRow, colA + 1),
      mm_readA(batchA, globalRow, colA + 2),
      mm_readA(batchA, globalRow, colA + 3)
  `;function On(s,t=!1){E(s[1]===1&&s[2]===1,()=>`A linear work group size is required. But got ${s}.`);const e=s[0]*4;return`
    var<workgroup> mm_Asub : array<vec4<f32>, ${s[0]}>;

    ${y()} {
      let tileCol = i32(localId.x);
      let globalCol = i32(globalId.x);
      let globalRow = i32(globalId.y);

      let numTiles = (uniforms.dimInner - 1) / ${e} + 1;
      let batch = i32(globalId.z);
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      // Without this initialization strange values show up in acc.
      var acc = 0.0;

      // Loop over shared dimension.
      for (var t = 0; t < numTiles; t++) {
        // Load one tile of A into local memory.
        let colA = t * ${e} + tileCol * 4;
        mm_Asub[tileCol] = vec4<f32>(${Mn(t)});
        workgroupBarrier();

        // Compute acc values for a single thread.
        for (var k = 0; k < ${e/4}; k++) {
          let rowB = t * ${e} + k * 4;
          let BCached = vec4<f32>(mm_readB(batchB, rowB, globalCol),
                              mm_readB(batchB, rowB + 1, globalCol),
                              mm_readB(batchB, rowB + 2, globalCol),
                              mm_readB(batchB, rowB + 3, globalCol));

          let ACached = mm_Asub[k];
          acc = acc + dot(ACached, BCached);
        }

        workgroupBarrier();
      }

      mm_write(batch, globalRow, globalCol, acc);
    }
  `}class Gn{constructor(t,e,i=!1,o=!1,r=null,a=null,n=null,u=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=e,this.dispatchLayout={x:[2],y:[1],z:[0]};const d=i?t[1]:t[2];if(this.isVec4=(d%4===0&&!i||e[1]%4===0&&i)&&e[2]%4===0&&!o,this.outputComponent=this.isVec4?4:1,this.isVectorA=e[1]===1&&!i,!this.isVec4&&this.isVectorA)this.elementsPerThread=[1,1,1],this.workgroupSize=[32,1,1];else{const c=Bt(e[1],d,e[2],i);this.workgroupSize=c.workgroupSize,this.elementsPerThread=c.elementsPerThread}this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread);const l=r!=null,h=n!=null;l&&this.variableNames.push("bias"),h&&this.variableNames.push("preluActivationWeights"),this.sequentialAccessByThreads=u,this.transposeA=i,this.transposeB=o,this.addBias=l,this.activation=a,this.hasPreluActivationWeights=h,[this.fitAOuter,this.fitBOuter,this.fitInner]=this.getShapeFit(e[1],e[2],d),this.shaderKey=`matMulPacked_${this.elementsPerThread}_${i}_${o}_${this.activation}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.isVectorA}_${this.sequentialAccessByThreads}`}getShapeFit(t,e,i){const o=this.workgroupSize[1]*this.elementsPerThread[1],r=this.workgroupSize[0]*this.elementsPerThread[0];!this.isVec4&&this.isVectorA?this.tileInner=this.workgroupSize[0]*4:this.tileInner=r;const a=t%o===0,n=e%r===0,u=i%this.tileInner===0;return[a,n,u]}getUserCode(){return`
      ${Z(this.activation,this.hasPreluActivationWeights,this.isVec4)}
      ${at(this.addBias,this.activation,!1,this.transposeB,this.fitAOuter,this.fitBOuter,this.fitInner,this.isVec4?4:1)}
      ${this.isVec4?We(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,!0):this.isVectorA?On(this.workgroupSize,this.transposeA):Te(this.elementsPerThread,this.workgroupSize,this.transposeA,this.tileInner,!1,null,this.sequentialAccessByThreads,!0)}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hn(s){return`
    var<workgroup> sumValues : array<f32, ${s}>;
    ${y()} {
      let coords = getOutputCoords();
      let batch = coords[0];
      let batchA = batch % uniforms.aShape[0];
      let batchB = batch % uniforms.bShape[0];
      let row = coords[1];
      let col = coords[2];
      var sum = 0.0;
      let Length = uniforms.dimInner;
      for (var k = i32(localId.x); k < Length; k = k + ${s}) {
        let dataA = mm_readA(batchA, row, k);
        let dataB = mm_readB(batchB, k, col);
        sum = sum + dataA * dataB;
      }
      sumValues[localId.x] = sum;
      workgroupBarrier();

      for(var currentSize = ${s/2}u; currentSize > 1u;
          currentSize = currentSize / 2u) {
        if (localId.x < currentSize)
        {
          sumValues[localId.x] = sumValues[localId.x] + sumValues[localId.x + currentSize];
        }
        workgroupBarrier();
      }

      if (localId.x == 0u) {
        sum = sumValues[0] + sumValues[1];
        mm_write(batch, row, col, sum);
      }
    }
  `}class Xn{constructor(t,e=!1,i=!1,o=null,r=null,a=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[256,1,1],this.outputShape=t,this.dispatchLayout={x:[],y:[1,2],z:[0]},this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize);const n=o!=null,u=a!=null;n&&this.variableNames.push("bias"),u&&this.variableNames.push("preluActivationWeights"),this.transposeA=e,this.transposeB=i,this.addBias=n,this.activation=r,this.hasPreluActivationWeights=u,this.shaderKey=`matMulReduce_${this.activation}_${e}_${i}`}getUserCode(){return`
      ${Z(this.activation,this.hasPreluActivationWeights)}
      ${at(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${Hn(this.workgroupSize[0])}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kn(s){const t=s[1],e=s[0],i=t>e?t:e;return`
  var<workgroup> mm_Asub : array<array<f32, ${i}>, ${t}>;
  var<workgroup> mm_Bsub : array<array<f32, ${e}>, ${i}>;

  // If the output size is small for matrix multiplication, avoid to use vec4
  // and handle some elements per thread to optimally utilize the ALU.
  // Read data from global memory to registers firstly, then store them into
  // shared memory, so it is instruction-Level parallelism for arithmetic
  // operations and others handle IO operations between barrier api, makes ALU
  // and load/store units work simultaneously, could improves the performance.
  ${y()} {
    let tileRow = i32(localId.y);
    let tileCol = i32(localId.x);
    let globalRow = i32(globalId.y);
    let globalCol = i32(globalId.x);
    let batch = i32(globalId.z);
    let batchA = batch % uniforms.aShape[0];
    let batchB = batch % uniforms.bShape[0];

    // uniforms.dimInner should be greater than 0.
    let numTiles = (uniforms.dimInner - 1) / ${i} + 1;
    var acc = 0.0;

    var globalColA = tileCol;
    var globalRowB = 0;
    var regA = mm_readA(batchA, globalRow, globalColA);
    var regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
    var regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
    globalColA = globalColA + ${i};
    globalRowB = globalRowB + ${i};

    for (var t = 0; t < numTiles; t = t + 1) {
      mm_Asub[tileRow][tileCol] = regA;
      mm_Bsub[2 * tileRow][tileCol] = regB0;
      mm_Bsub[2 * tileRow + 1][tileCol] = regB1;

      workgroupBarrier();

      regA = mm_readA(batchA, globalRow, globalColA);
      regB0 = mm_readB(batchB, globalRowB + 2 * tileRow, globalCol);
      regB1 = mm_readB(batchB, globalRowB + 2 * tileRow + 1, globalCol);
      globalColA = globalColA + ${i};
      globalRowB = globalRowB + ${i};

      for (var k = 0; k < ${i}; k = k + 1) {
        acc = acc + mm_Asub[tileRow][k] * mm_Bsub[k][tileCol];
      }
      workgroupBarrier();
    }

    mm_write(batch, globalRow, globalCol, acc);
  }
  `}class qn{constructor(t,e,i,o=!1,r=!1,a=null,n=null,u=null){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[16,8,1],this.outputShape=i,this.dispatchLayout={x:[2],y:[1],z:[0]},this.dispatch=[Math.ceil(i[2]/this.workgroupSize[0]),Math.ceil(i[1]/this.workgroupSize[1]),i[0]];const d=a!=null;d&&this.variableNames.push("bias");const l=u!=null;l&&this.variableNames.push("preluActivationWeights"),this.transposeA=o,this.transposeB=r,this.addBias=d,this.activation=n,this.hasPreluActivationWeights=l,this.shaderKey=`matMulSmallOutputSize_${this.activation}_${o}_${r}`}getUserCode(){return`
      ${Z(this.activation,this.hasPreluActivationWeights)}
      ${at(this.addBias,this.activation,this.transposeA,this.transposeB)}
      ${Kn(this.workgroupSize)}
    `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yn{constructor(t,e,i=!1,o=!1){this.variableNames=["A","B"],this.uniforms="dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.workgroupSize=[8,8,1],this.atomic=!0,this.splitedDimInner=128,E(t[0]===1,()=>"MatMulSplitKProgram only supports batch = 1."),this.outputShape=t,this.dispatchLayout={x:[2],y:[1],z:[0,3]};const r=(i&&this.outputShape[1]%4===0||!i&&e%4===0)&&this.outputShape[2]%4===0;this.elementsPerThread=[4,4,this.splitedDimInner],this.outputComponent=r?4:1,r||(this.outputShape[1]<16&&(this.elementsPerThread[1]=1),this.outputShape[2]<16&&(this.elementsPerThread[0]=1)),this.dispatch=S(this.dispatchLayout,[this.outputShape[0],this.outputShape[1],this.outputShape[2],e],this.workgroupSize,this.elementsPerThread),this.transposeA=i,this.transposeB=o,this.shaderKey=`matMulSplitK_${i}_${o}_${this.elementsPerThread}_${this.outputComponent}`}getUserCode(){const t=this.outputComponent;return`
      ${_t(!1,this.transposeB,!1,!1,!1,t)}
      fn mm_write(batch: i32, row : i32, col : i32, value : ${z(t)}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
          let coords = vec3<i32>(batch, row, col);
          let flatIndex = getOutputIndexFromCoords(coords);
          // The problem is that we should initialize output to zero before using.
          // Otherwise, the original value will be added to the result.
          for (var i = 0; i < ${t}; i = i + 1) {
            ${te("&result[flatIndex + i]",`${t>1?"value[i]":"value"}`,"float32")}
          }
        }
      }
      ${t===4?We(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner):Te(this.elementsPerThread,this.workgroupSize,this.transposeA,32,!0,this.splitedDimInner)}
    `}}class jn{constructor(t,e=null,i=null,o=null){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=e!=null,this.hasPreluActivationWeights=o!=null,this.activation=i,this.addBias&&this.variableNames.push("bias"),this.hasPreluActivationWeights&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`biasActivation_${i}`}getUserCode(){return`
    ${Z(this.activation,this.hasPreluActivationWeights)}
    ${y("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        var value = getXByOutputIndex(index);
        ${ae(this.addBias,this.activation)}
        setOutputAtIndex(index, value);
      }
    }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qn{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms="value : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="fill"}getUserCode(){return`
    ${y("index")} {
      if (index < uniforms.size) {
        setOutputAtIndex(index, uniforms.value);
      }
    }
  `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function X(s){const{backend:t,attrs:e}=s,{shape:i,value:o}=e;let{dtype:r}=e;if(r=r||vs(o),r==="string"){const a=Is(r,N(i));return a.fill(o),t.makeTensorInfo(i,r,a)}else{const a=new Qn(i),n=[{type:"float32",data:[o]}];return t.runWebGPUProgram(a,[],r,n)}}const Zn={kernelName:Ss,backendName:"webgpu",kernelFunc:X};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function R(s){const{inputs:t,attrs:e}=s,{x:i}=t,{shape:o}=e,r=N(i.shape),a=Rs(o,r),n=N(a);return E(r===n,()=>`The new shape (${a}) has ${n} elements and the old shape (${i.shape}) has ${r} elements. The new shape and old shape must have the same number of elements.`),s.backend.incRef(i.dataId),{dataId:i.dataId,shape:a,dtype:i.dtype}}const Jn={kernelName:ks,backendName:"webgpu",kernelFunc:R};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ve({a:s,b:t,transposeA:e,transposeB:i,backend:o,bias:r=null,preluActivationWeights:a=null,leakyreluAlpha:n=0,activation:u=null}){const d=s.shape.length,l=t.shape.length,h=e?s.shape[d-2]:s.shape[d-1],c=i?t.shape[l-1]:t.shape[l-2],p=e?s.shape[d-1]:s.shape[d-2],f=i?t.shape[l-2]:t.shape[l-1],m=s.shape.slice(0,-2),g=t.shape.slice(0,-2),x=N(m),C=N(g),v=J(s.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,f]);E(h===c,()=>`Error in matMul: inner shapes (${h}) and (${c}) of Tensors with shapes ${s.shape} and ${t.shape} and transposeA=${e} and transposeB=${i} must match.`);const k=e?[x,h,p]:[x,p,h],P=i?[C,f,c]:[C,c,f],D=R({inputs:{x:s},backend:o,attrs:{shape:k}}),F=R({inputs:{x:t},backend:o,attrs:{shape:P}}),A=[D,F],_=Math.max(x,C),W=[D,F],H=[{type:"int32",data:[p]},{type:"int32",data:[f]},{type:"int32",data:[h]}];let O,T;const M=[_,p,f];let G=V().get("WEBGPU_MATMUL_PROGRAM_TYPE");if(G<0){const de=V().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),xe=de>0?de:o.thresholdToIncreaseWorkgroups,Ce=_*Math.ceil(p/32)*Math.ceil(f/32);Ce<=xe||p<=8&&Ce<=xe*2?_*p*f<=128?G=Y.MatMulReduceProgram:_===1&&c>=2e3?G=Y.MatMulSplitKProgram:G=Y.MatMulSmallOutputSizeProgram:G=Y.MatMulPackedProgram}switch(G){case Y.MatMulReduceProgram:O=new Xn(M,e,i,r,u,a);break;case Y.MatMulSplitKProgram:{if(T=X({backend:o,attrs:{shape:M,value:0,dtype:s.dtype}}),O=new Yn(M,c,e,i),r||u){T=o.runWebGPUProgram(O,W,s.dtype,H,T);const xe=new jn(T.shape,r,u,a);let Ce=null;const ze=[T];r&&ze.push(r),a&&ze.push(a),u==="leakyrelu"&&(Ce=[{type:"float32",data:[n]}],xe.uniforms+=" alpha : f32,");const dt=o.runWebGPUProgram(xe,ze,T.dtype,Ce);A.push(T);const as=R({inputs:{x:dt},backend:o,attrs:{shape:v}});A.push(dt);for(const ns of A)o.disposeData(ns.dataId);return as}break}case Y.MatMulSmallOutputSizeProgram:O=new qn(k,P,M,e,i,r,u,a);break;case Y.MatMulPackedProgram:const de=o.adapterInfo.isIntel();O=new Gn(k,M,e,i,r,u,a,de);break;default:throw new Error(`Unsupported MatMulProgramType ${G}.`)}r&&W.push(r),a&&W.push(a),u==="leakyrelu"&&(H.push({type:"float32",data:[n]}),O.uniforms+=" alpha : f32,"),T=o.runWebGPUProgram(O,W,s.dtype,H,T);const rs=R({inputs:{x:T},backend:o,attrs:{shape:v}});A.push(T);for(const de of A)o.disposeData(de.dataId);return rs}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eu(s){const{inputs:t,backend:e,attrs:i}=s,{a:o,b:r,bias:a,preluActivationWeights:n}=t,{transposeA:u,transposeB:d,activation:l,leakyreluAlpha:h}=i;return Ve({a:o,b:r,transposeA:u,transposeB:d,backend:e,bias:a,preluActivationWeights:n,leakyreluAlpha:h,activation:l})}const tu={kernelName:Ps,backendName:"webgpu",kernelFunc:eu};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yt{constructor(t,e,i){this.variableNames=["AReal","AImag","BReal","BImag"],this.workgroupSize=[128,1,1],this.size=!0,this.outputShape=J(e,i),this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`binaryOpComplex_${t}`,this.op=t}getUserCode(){return`
      fn binaryOpComplex(
          areal : f32, aimag : f32, breal : f32, bimag : f32) -> f32 {
        ${rt(this.op,!1)}
      }

      ${y("index")} {
        if(index < uniforms.size) {
          let areal = getARealByOutputIndex(index);
          let aimag = getAImagByOutputIndex(index);
          let breal = getBRealByOutputIndex(index);
          let bimag = getBImagByOutputIndex(index);
          setOutputAtIndex(index, binaryOpComplex(areal, aimag, breal, bimag));
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fe{constructor(t,e,i){if(this.size=!0,this.variableNames=["A","B"],this.outputShape=J(e,i),this.dispatchLayout=I(this.outputShape),this.op=t,this.useSharedMemoryWithA=e.length<=1&&i.length>1&&e[0]<128,this.useSharedMemoryWithB=i.length<=1&&e.length>1&&i[0]<128,this.useSharedMemoryWithA||this.useSharedMemoryWithB)this.outputComponent=1,this.variableComponents=[1,1],this.lastDimensionSize=this.useSharedMemoryWithB?i[0]:e[0],this.shaderKey=`binary_${t}_${this.lastDimensionSize}`,this.type="shared",this.workgroupSize=[256,1,1];else{const o=e.length>0&&e[e.length-1]%4===0,r=i.length>0&&i[i.length-1]%4===0;o&&r?(this.outputComponent=4,this.variableComponents=[4,4]):o&&(ht(i)||i[i.length-1]===1)||r&&(ht(e)||e[e.length-1]===1)?(this.outputComponent=4,this.variableComponents=o?[4,1]:[1,4]):(this.outputComponent=1,this.variableComponents=[1,1]),this.type="nonshared",this.shaderKey=`binary_${t}_${this.variableComponents}`,this.workgroupSize=[128,1,1]}this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.outputComponent,1,1])}getUserCode(){let t;const e=this.outputComponent===4?"vec4<f32>":"f32",i=`
    fn binaryOperation(a : ${e}, b : ${e}) -> ${e} {
      ${rt(this.op,this.outputComponent===4)}
    };
    `;if(this.type==="shared"){const o=this.lastDimensionSize>1?`coords[${this.outputShape.length-1}]`:"0",r=this.useSharedMemoryWithB?`let a = getAByOutputIndex(index);
          let b = sharedBuf[${o}];`:`let a = sharedBuf[${o}];
          let b = getBByOutputIndex(index);`;t=`
        ${i}
        var<workgroup> sharedBuf : array<f32, ${this.lastDimensionSize}>;
        ${y("index")} {
          // Fill in the shared memory buffer.
          let localIndex = i32(localId.x);
          if(localIndex < ${this.lastDimensionSize}) {
            sharedBuf[localIndex] = f32(${this.useSharedMemoryWithB?"B":"A"}[localIndex]);
          }
          workgroupBarrier();

          if(index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            ${r}
            setOutputAtIndex(index, binaryOperation(a, b));
          }
        }
        `}else t=`
       ${i}
       ${y("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index * ${this.outputComponent});
           let a = ${e}(getAByOutputCoords(coords));
           let b = ${e}(getBByOutputCoords(coords));
           setOutputAtIndex(index, binaryOperation(a, b));
         }
       }
       `;return t}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function K(s){const{inputs:t}=s,{x:e}=t;return s.backend.incRef(e.dataId),{dataId:e.dataId,shape:e.shape,dtype:e.dtype}}const su={kernelName:$s,backendName:"webgpu",kernelFunc:K};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ne(s){const{inputs:t,backend:e}=s,{real:i,imag:o}=t,r=e.makeTensorInfo(i.shape,"complex64"),a=e.tensorMap.get(r.dataId),n=K({inputs:{x:i},backend:e}),u=K({inputs:{x:o},backend:e});return a.complexTensorInfos={real:n,imag:u},r}const ou={kernelName:Ds,backendName:"webgpu",kernelFunc:ne};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class me{constructor(t,e,i=""){this.variableNames=["A"],this.size=!0;const o=128;this.workgroupSize=[o,1,1],this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.op=e,i!==""&&(this.uniforms=i),this.shaderKey=`unary_${e}`}getUserCode(){return`
      fn unaryOperation(a : f32) -> f32 {
        ${se(this.op,!1)}
      }
      ${y("index")} {
        if (index < uniforms.size) {
          let a = getAByOutputIndex(index);
          setOutputAtIndex(index, unaryOperation(a));
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function L({opType:s,cpuKernelImpl:t,dtype:e}){return({inputs:i,backend:o})=>{const{x:r}=i,a=o,n=e||r.dtype;if(a.shouldExecuteOnCPU([r])&&t!=null){const d=a.tensorMap.get(r.dataId),l=t(d.values,n);return a.makeTensorInfo(r.shape,n,l)}const u=new me(r.shape,s);return a.runWebGPUProgram(u,[r],n)}}function U({opType:s,cpuKernelImpl:t,supportsComplex:e=!1,dtype:i}){return({inputs:o,backend:r})=>{const{a,b:n}=o,u=r;if(e&&a.dtype==="complex64"){const h=u.tensorMap.get(a.dataId),c=u.tensorMap.get(n.dataId);let p,f;if(s!==$.MUL)[p,f]=[[h.complexTensorInfos.real,c.complexTensorInfos.real],[h.complexTensorInfos.imag,c.complexTensorInfos.imag]].map(g=>{const[x,C]=g,w={dataId:x.dataId,dtype:x.dtype,shape:a.shape},v={dataId:C.dataId,dtype:C.dtype,shape:n.shape},k=new Fe(s,a.shape,n.shape);return u.runWebGPUProgram(k,[w,v],Se(x.dtype,C.dtype))});else{const g=new yt($.COMPLEX_MULTIPLY_REAL,a.shape,n.shape),x=new yt($.COMPLEX_MULTIPLY_IMAG,a.shape,n.shape),C=[{dataId:h.complexTensorInfos.real.dataId,dtype:h.complexTensorInfos.real.dtype,shape:a.shape},{dataId:h.complexTensorInfos.imag.dataId,dtype:h.complexTensorInfos.imag.dtype,shape:a.shape},{dataId:c.complexTensorInfos.real.dataId,dtype:c.complexTensorInfos.real.dtype,shape:n.shape},{dataId:c.complexTensorInfos.imag.dataId,dtype:c.complexTensorInfos.imag.dtype,shape:n.shape}];p=u.runWebGPUProgram(g,C,"float32"),f=u.runWebGPUProgram(x,C,"float32")}const m=ne({inputs:{real:p,imag:f},backend:u});return u.disposeData(p.dataId),u.disposeData(f.dataId),m}const d=i||Se(a.dtype,n.dtype);if((a.dtype==="string"||n.dtype==="string"||u.shouldExecuteOnCPU([a,n]))&&t!=null){const h=u.tensorMap.get(a.dataId).values,c=u.tensorMap.get(n.dataId).values,p=a.dtype==="string"?pt(h):h,f=a.dtype==="string"?pt(c):c,[m,g]=t(a.shape,n.shape,p,f,d);return u.makeTensorInfo(g,d,m)}const l=new Fe(s,a.shape,n.shape);return u.runWebGPUProgram(l,[a,n],d)}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const{addImpl:iu,castImpl:ru,ceilImpl:au,concatImpl:nu,equalImpl:uu,expImpl:du,expm1Impl:lu,floorImpl:cu,floorDivImpl:hu,gatherNdImpl:pu,gatherV2Impl:fu,greaterEqualImpl:mu,greaterImpl:gu,lessEqualImpl:xu,lessImpl:Cu,logImpl:wu,maxImpl:bu,maximumImpl:yu,minimumImpl:Su,multiplyImpl:vu,negImpl:Iu,notEqualImpl:ku,prodImpl:Ru,rangeImpl:Pu,rsqrtImpl:$u,scatterImpl:Du,simpleAbsImpl:Nu,sliceImpl:zu,stridedSliceImpl:Au,stringNGramsImpl:Fu,subImpl:Lu,tileImpl:Eu,topKImpl:Bu,transposeImpl:_u}=Ns;/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wu=L({opType:b.ABS,cpuKernelImpl:Nu}),Tu={kernelName:zs,backendName:"webgpu",kernelFunc:Wu};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vu=L({opType:b.ACOS}),Uu={kernelName:As,backendName:"webgpu",kernelFunc:Vu};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mu=L({opType:b.ACOSH}),Ou={kernelName:Fs,backendName:"webgpu",kernelFunc:Mu};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gu=U({opType:$.ADD,cpuKernelImpl:iu,supportsComplex:!0}),Hu={kernelName:Ls,backendName:"webgpu",kernelFunc:Gu};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xu{constructor(t){this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t[0],this.variableNames=t.map((e,i)=>`T${i}`),this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="addN"}getUserCode(){const t=[];this.variableNames.forEach(o=>{t.push(`let v${o} = get${o}ByOutputCoords(coords);`)});const e=this.variableNames.map(o=>`v${o}`).join(" + ");return`
      ${y("index")} {
        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if (flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            ${t.join(`
        `)}
            setOutputAtIndex(flatIndex, ${e});
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ku(s){const{inputs:t,backend:e}=s,i=t;if(i.length===1)return K({inputs:{x:i[0]},backend:e});const o=i.map(n=>n.dtype).reduce((n,u)=>Se(n,u)),r=i.map(n=>n.shape),a=new Xu(r);return e.runWebGPUProgram(a,i,o)}const qu={kernelName:Es,backendName:"webgpu",kernelFunc:Ku};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yu{constructor(t,e){this.variableNames=["A"],this.workgroupSize=[16,16,1];const i=new Array(t.length);for(let o=0;o<i.length;o++)i[o]=t[e[o]];this.outputShape=i,this.dispatchLayout={x:[0],y:[1]},this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[1,1,1]),this.shaderKey="transposeShared"}getUserCode(){E(this.workgroupSize[0]===this.workgroupSize[1],()=>`Must be a square tile, current tile shape is ${this.workgroupSize[0]} x ${this.workgroupSize[1]}`);const t=this.workgroupSize[0];return`
      var<workgroup> tile : array<array<f32, ${this.workgroupSize[0]+1}>, ${this.workgroupSize[0]}>;
      ${y()} {
        var x = i32(workgroupId.x) * ${t} + i32(localId.x);
        var y = i32(workgroupId.y) * ${t} + i32(localId.y);
        let width = uniforms.outShape[0];
        let height = uniforms.outShape[1];
        if (x < width && y < height) {
          tile[localId.y][localId.x] = f32(A[y * width + x]);
        }
        workgroupBarrier();

        x = i32(workgroupId.y) * ${t} + i32(localId.x);
        y = i32(workgroupId.x) * ${t} + i32(localId.y);
        if (x < height && y < width) {
          setOutputAtIndex((y * height + x), tile[localId.x]
            [localId.y]);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ju{constructor(t,e){this.variableNames=["A"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0;const i=new Array(t.length);for(let o=0;o<i.length;o++)i[o]=t[e[o]];this.outputShape=i,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.newDim=e,this.shaderKey=`transpose_${e}`}getUserCode(){const t=B(this.outputShape.length),e=Wt(this.newDim);return`
      ${y("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            setOutputAtIndex(flatIndex, A[getIndexFromCoords${this.outputShape.length}D(
              ${t}(${e}), uniforms.aShape)]);
          }
        }
      }
    `}}function Wt(s){const t=s.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);const e=new Array(t);for(let i=0;i<s.length;i++)e[s[i]]=`coords.${Q(i)}`;return e.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function j(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{perm:r}=i,a=e,n=o.shape.length,u=new Array(n);for(let l=0;l<u.length;l++)u[l]=o.shape[r[l]];if(e.shouldExecuteOnCPU([o])){const h=a.tensorMap.get(o.dataId).values,c=_u(h,o.shape,o.dtype,r,u);return e.makeTensorInfo(u,o.dtype,c)}if(o.shape.length===2&&fe(r,[1,0])){const l=new Yu(o.shape,r);return a.runWebGPUProgram(l,[o],o.dtype)}const d=new ju(o.shape,r);return a.runWebGPUProgram(d,[o],o.dtype)}const Qu={kernelName:Bs,backendName:"webgpu",kernelFunc:j};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zu{constructor(t,e,i){this.variableNames=["x"],this.uniforms="reduceSize : i32,",this.size=!0,this.inputShape=[t.batchSize,t.inSize];const[o]=je(this.inputShape,[1]);this.outputShape=o.length===0?[1]:o,t.inSize>=32768&&i>=512?this.workgroupSize=[512,1,1]:t.inSize>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,[1,1,1]),this.reduceType=e,this.shaderKey=`reduce_${e}`}getUserCode(){let t="",e="0.0";const i=this.workgroupSize[0];this.reduceType==="min"||this.reduceType==="max"?(t=`
         if (isnan(candidate)) {
          bestValue = uniforms.NAN;
         } else if (!isnan(bestValue) && candidate ${this.reduceType==="min"?"<":">"} bestValue)
           {  bestValue = candidate; }`,e="f32(x[offset])"):this.reduceType==="sum"||this.reduceType==="mean"?t=" bestValue = bestValue + candidate; ":this.reduceType==="prod"?(t=" bestValue = bestValue * candidate; ",e="1.0"):this.reduceType==="all"?(t=" bestValue = f32(bestValue >= 1.0 && candidate >= 1.0); ",e="1.0"):this.reduceType==="any"&&(t=" bestValue = f32(bestValue >= 1.0 || candidate >= 1.0); ",e="0.0");const o=this.reduceType==="mean"?"setOutputAtIndex(outputIndex, bestValue / f32(uniforms.reduceSize));":"setOutputAtIndex(outputIndex, bestValue);";return`
       fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
       }

       ${`
         var<workgroup> xBestValues : array<f32, ${i}>;
       `}
       fn getOffset(outputIndex : i32) -> i32 {
         let outputCoords = getCoordsFromIndex(outputIndex);
         let offset = ${this.outputShape.length===1?"outputCoords":"outputCoords[0]"} * uniforms.reduceSize;
          return offset;
       }
       ${y("index")} {
         let outputIndex = index / ${i};
         let offset = getOffset(outputIndex);
         var bestValue = ${e};
         let Length = uniforms.reduceSize;
         let WorkPerThread = DIV_CEIL(u32(Length), ${i}u);
         for (var k = i32(localId.x); k < Length && outputIndex < uniforms.size;
             k = k + ${i}) {
           let candidate = f32(x[offset + k]);
           ${t}
         }
         xBestValues[localId.x] = bestValue;
         workgroupBarrier();

         var reduceSize = min(u32(Length), ${i}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            ${t}
            xBestValues[localId.x] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (localId.x == 0u && outputIndex < uniforms.size) {
          ${o}
        }
       }
     `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ju={mean:"float32",all:"bool",any:"bool"};function ue(s,t,e,i,o){const r=s.shape.length,a=[],n=re(t,s.shape);let u=n;const d=Re(u,r);let l=s;d!=null&&(l=j({inputs:{x:s},attrs:{perm:d},backend:o}),u=Pe(u.length,r),a.push(l)),Qe(i,u,r);const[h,c]=je(l.shape,u);let p=h;e&&(p=_s(h,n));let f;if((i==="max"||i==="prod")&&o.shouldExecuteOnCPU([l])){const m=o.tensorMap.get(l.dataId).values;switch(i){case"max":const g=bu(m,N(c),p,s.dtype);f=o.makeTensorInfo(p,s.dtype,g);break;case"prod":const{outVals:x,outShape:C,outDtype:w}=Ru(l.shape,l.dtype,m,u);f=o.makeTensorInfo(C,w,x);break;default:throw new Error(`${i} CPU implementation is not yet supported.`)}}else{const m=N(c),x=N(l.shape)/m,C={windowSize:m,inSize:m,batchSize:x,outSize:1},w=Ju[i]||Ws(s.dtype),v=[{type:"int32",data:[m]}],k=new Zu(C,i,o.device.limits.maxComputeWorkgroupSizeX),P=o.runWebGPUProgram(k,[l],w,v);a.push(P),f=R({inputs:{x:P},attrs:{shape:p},backend:o})}return a.forEach(m=>o.disposeData(m.dataId)),f}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ed(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{keepDims:r,axis:a}=i;return ue(o,a,r,"all",e)}const td={kernelName:Ts,backendName:"webgpu",kernelFunc:ed};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sd(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{keepDims:r,axis:a}=i;return ue(o,a,r,"any",e)}const od={kernelName:Vs,backendName:"webgpu",kernelFunc:sd};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Tt{constructor(t,e,i){this.workgroupSize=[64,1,1],this.variableNames=["x"],this.uniforms="infinityValue : f32,",this.size=!0;const o=[e];this.op=i==="min"?"<":">";const[r,a]=je(t,o);this.outputShape=r.length===0?[1]:r,this.dispatchLayout=I(this.outputShape),N(a)<32?(this.type="plain",this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize)):(this.type="shared",this.dispatch=S(this.dispatchLayout,this.outputShape,[1,1,1])),this.inputShape=t,this.shaderKey=`argMinMax_${this.op}_${this.type}`}getUserCode(){const t=this.workgroupSize[0],e=()=>this.inputShape.length===1?"uniforms.xShape":`uniforms.xShape.${Q(this.inputShape.length-1)}`,i=()=>{let o="";if(this.outputShape.length===1)this.inputShape.length!==1&&(o+="outputCoords,");else for(let r=0;r<this.outputShape.length;r++)o+=`outputCoords.${Q(r)},`;return o};return this.type==="shared"?`
      fn DIV_CEIL(a : u32, b : u32) -> u32 {
        return ((a - 1u) / b + 1u);
      }

      ${`
      var<workgroup> xBestIndices : array<i32, ${t}>;
      var<workgroup> xBestValues : array<f32, ${t}>;
    `}

      ${y("index")} {
        let outputIndex = index / ${t};
        let reduceLength = ${e()};

        var bestIndex = i32(localId.x);
        var bestValue = uniforms.infinityValue;
        let outputCoords = getCoordsFromIndex(outputIndex);
        for (var k = i32(localId.x); k < reduceLength && outputIndex < uniforms.size;
            k = k + ${t}) {
          let candidate = getX(${i()} k);
          if (!isnan(candidate) && candidate ${this.op} bestValue) {
            bestValue = candidate;
            bestIndex = k;
          }
        }
        xBestValues[localId.x] = bestValue;
        xBestIndices[localId.x] = bestIndex;
        workgroupBarrier();

        var reduceSize = min(u32(reduceLength), ${t}u);
        for (var currentSize = reduceSize / 2u; reduceSize > 1u;
            currentSize = reduceSize / 2u) {
          let interval = DIV_CEIL(reduceSize, 2u);
          if (localId.x < currentSize) {
            let candidate = xBestValues[localId.x + interval];
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              xBestValues[localId.x] = bestValue;
              xBestIndices[localId.x] = xBestIndices[localId.x + interval];
            }
          }
          reduceSize = interval;
          workgroupBarrier();
        }

        if (localId.x == 0u && outputIndex < uniforms.size) {
          setOutputAtIndexI32(outputIndex, xBestIndices[localId.x]);
        }
      }
    `:`
      ${y("index")} {
        if (index < uniforms.size) {
          let outputCoords = getCoordsFromIndex(index);
          var bestIndex = 0;
          var bestValue = getX(${i()} 0);
          let reduceLength = ${e()};
          for (var i = 1; i < reduceLength; i++) {
            let candidate = getX(${i()} i);
            if (candidate ${this.op} bestValue) {
              bestValue = candidate;
              bestIndex = i;
            }
          }
          setOutputAtIndexI32(index, bestIndex);
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function id(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{axis:r}=i;let a=re(r,o.shape);const n=Re(a,o.shape.length);let u=o;const d=[];n!=null&&(u=j({inputs:{x:o},backend:e,attrs:{perm:n}}),d.push(u),a=Pe(a.length,u.shape.length)),Qe("argMax",[a[0]],u.shape.length);const l=new Tt(u.shape,a[0],"max"),h=[{type:"float32",data:[Number.NEGATIVE_INFINITY]}],c=e.runWebGPUProgram(l,[u],"int32",h);return d.forEach(p=>e.disposeData(p.dataId)),c}const rd={kernelName:Us,backendName:"webgpu",kernelFunc:id};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ad(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{axis:r}=i;let a=re(r,o.shape);const n=Re(a,o.shape.length);let u=o;const d=[];n!=null&&(u=j({inputs:{x:o},backend:e,attrs:{perm:n}}),d.push(u),a=Pe(a.length,u.shape.length)),Qe("argMin",[a[0]],u.shape.length);const l=new Tt(u.shape,a[0],"min"),h=[{type:"float32",data:[Number.POSITIVE_INFINITY]}],c=e.runWebGPUProgram(l,[u],"int32",h);return d.forEach(p=>e.disposeData(p.dataId)),c}const nd={kernelName:Ms,backendName:"webgpu",kernelFunc:ad};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ud=L({opType:b.ASIN}),dd={kernelName:Os,backendName:"webgpu",kernelFunc:ud};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ld=L({opType:b.ASINH}),cd={kernelName:Gs,backendName:"webgpu",kernelFunc:ld};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hd=L({opType:b.ATAN}),pd={kernelName:Hs,backendName:"webgpu",kernelFunc:hd};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fd=U({opType:$.ATAN2}),md={kernelName:Xs,backendName:"webgpu",kernelFunc:fd};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gd=L({opType:b.ATANH}),xd={kernelName:Ks,backendName:"webgpu",kernelFunc:gd};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cd{constructor(t){this.variableNames=["x"],this.uniforms="strides : vec2<i32>,",this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="poolWithFilterSizeEqualsOne"}getUserCode(){return`
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];

          let xRCCorner = coords.yz * uniforms.strides;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          let value = getX(batch, xRCorner, xCCorner, d);
          setOutputAtIndex(index, value);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Ie{constructor(t,e,i=!1,o=!1,r=!1){if(this.variableNames=["x"],this.uniforms="strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, convDims : vec2<i32>, filterDims : vec2<i32>,",this.workgroupSize=[128,1,1],this.size=!0,e==="avg"&&i)throw new Error("Cannot compute positions for average pool.");this.outputShape=t.outShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=e,this.computePositions=i,this.flattenPositions=o,this.includeBatchIndex=r,this.shaderKey=`pool2D_${e}_${i}_${o}_${r}`}getUserCode(){let t;this.poolType==="avg"?t="resultValue = resultValue + value; count = count + 1.0;":this.computePositions?t=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"((batch * uniforms.xShape[1] + xR) * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"(xR * uniforms.xShape[2] + xC) * uniforms.xShape[3] + d":"wR * uniforms.filterDims.y + wC"};
      }`:t="resultValue = max(value, resultValue);";let e="resultValue";return this.poolType==="avg"&&(e="resultValue / max(count, 1.0)"),`
      ${y("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let batch = coords[0];
          let d = coords[3];
          let xRCCorner = vec2<i32>(coords.yz) * uniforms.strides - uniforms.pads;
          let xRCorner = xRCCorner.x;
          let xCCorner = xRCCorner.y;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${this.poolType==="avg"?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + uniforms.dilations.x) {
            let xR = xRCorner + wR;

            if (xR < 0 || xR >= uniforms.convDims.x) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + uniforms.dilations.y) {
              let xC = xCCorner + wC;
              if (xC < 0 || xC >= uniforms.convDims.y) {
                continue;
              }

              let value = getX(batch, xR, xC, d);
              ${t}
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${e});`}
        }
      }
    `}}class nt{constructor(t,e,i=!1,o=!1,r=!1){if(this.variableNames=["x"],this.uniforms="strides : vec3<i32>, pads : vec3<i32>, convDims : vec3<i32>, filterDims : vec3<i32>,",this.workgroupSize=[128,1,1],this.size=!0,e==="avg"&&i)throw new Error("Cannot compute positions for average pool.");this.outputShape=t.outShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.poolType=e,this.computePositions=i,this.flattenPositions=o,this.includeBatchIndex=r,this.shaderKey=`pool3D_${e}_${i}_${o}_${r}`}getUserCode(){let t;this.poolType==="avg"?t="resultValue += value; count += 1.0;":this.computePositions?t=`let currMaxValue = mix(value, maxValue, maxValueFound);
      if (value >= currMaxValue) {
        maxValue = value;
        maxValueFound = 1.0;
        maxPosition = ${this.flattenPositions?this.includeBatchIndex?"(((batch * uniforms.xShape.y + xD) * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"((xD * uniforms.xShape.z + xR) * uniforms.xShape.w + xC) * uniforms.xShape.u + ch":"wD * uniforms.filterDims.y * uniforms.filterDims.y + wR * uniforms.filterDims.z + wC"};
      }`:t="resultValue = max(value, resultValue);";let e="resultValue";return this.poolType==="avg"&&(e="resultValue / max(count, 1.0)"),`
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let batch = coords.x;
          let ch = coords.u;

          let xCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
          let xDCorner = xCorner.x;
          let xRCorner = xCorner.y;
          let xCCorner = xCorner.z;

          ${this.computePositions?`var maxValue = 0.0;
            var maxValueFound = 0.0;
            var maxPosition = 0;`:`var resultValue = ${this.poolType==="avg"?"0.0":"-1.0 / pow(10.0, -20.0)"};`}

          var count = 0.0;
          for (var wD = 0; wD < uniforms.filterDims.x; wD++) {
            let xD = xDCorner + wD;
            if (xD < 0 || xD >= uniforms.convDims.x) {
              continue;
            }

            for (var wR = 0; wR < uniforms.filterDims.y; wR++) {
              let xR = xRCorner + wR;
              if (xR < 0 || xR >= uniforms.convDims.y) {
                continue;
              }

              for (var wC = 0; wC < uniforms.filterDims.z; wC++) {
                let xC = xCCorner + wC;
                if (xC < 0 || xC >= uniforms.convDims.z) {
                  continue;
                }

                let value = getX(batch, xD, xR, xC, ch);
                ${t}
              }
            }
          }

          ${this.computePositions?"setOutputAtIndexI32(index, maxPosition);":`setOutputAtIndex(index, ${e});`}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vt(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{reductionIndices:r,keepDims:a}=i;return ue(o,r,a,"max",e)}const wd={kernelName:qs,backendName:"webgpu",kernelFunc:Vt};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ut(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{keepDims:r,axis:a}=i;return ue(o,a,r,"mean",e)}const bd={kernelName:Ys,backendName:"webgpu",kernelFunc:Ut};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mt(s,t,e,i){if(t.filterWidth===1&&t.filterHeight===1&&fe(t.inShape,t.outShape))return K({inputs:{x:s},backend:i});if(t.filterWidth===t.inWidth&&t.filterHeight===t.inHeight&&t.batchSize===1&&t.padInfo.type==="VALID"){const a=s.shape.length,n=R({inputs:{x:s},backend:i,attrs:{shape:[s.shape[a-3]*s.shape[a-2],s.shape[a-1]]}});let u;e==="avg"?u=Ut({inputs:{x:n},backend:i,attrs:{axis:0,keepDims:!1}}):(E(e==="max",()=>`Invalid pool type ${e}`),u=Vt({inputs:{x:n},backend:i,attrs:{reductionIndices:0,keepDims:!1}}));const d=R({inputs:{x:u},backend:i,attrs:{shape:t.outShape}});return i.disposeData(n.dataId),i.disposeData(u.dataId),d}let o;const r=[{type:"int32",data:[t.strideHeight,t.strideWidth]}];return t.filterHeight===1&&t.filterWidth===1?o=new Cd(t):(e==="avg"?o=new Ie(t,"avg"):(E(e==="max",()=>`Invalid pool type ${e}`),o=new Ie(t,"max")),r.push({type:"int32",data:[t.padInfo.top,t.padInfo.left]},{type:"int32",data:[t.dilationHeight,t.dilationWidth]},{type:"int32",data:[t.inHeight,t.inWidth]},{type:"int32",data:[t.effectiveFilterHeight,t.effectiveFilterWidth]})),i.runWebGPUProgram(o,[s],s.dtype,r)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yd(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{filterSize:r,strides:a,pad:n,dimRoundingMode:u}=i,l=$e(o.shape,r,a,1,n,u);return Mt(o,l,"avg",e)}const Sd={kernelName:js,backendName:"webgpu",kernelFunc:yd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vd(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{filterSize:r,strides:a,pad:n,dataFormat:u,dimRoundingMode:d}=i,l=[1,1,1],h=Be(o.shape,r,a,l,n,d,u),c=new nt(h,"avg"),p=[{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.inDepth,h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterDepth,h.effectiveFilterHeight,h.effectiveFilterWidth]}];return e.runWebGPUProgram(c,[o],o.dtype,p)}const Id={kernelName:Qs,backendName:"webgpu",kernelFunc:vd};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class kd{constructor(t){this.variableNames=["dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool2DBackprop"}getUserCode(){return`
      ${y("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR = wR + uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC = wC + uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);

            dotProd = dotProd + dyValue * uniforms.avgMultiplier;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class Rd{constructor(t){this.variableNames=["dy"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
       outDepth : i32, outHeight : i32, outWidth : i32, avgMultiplier : f32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="avgPool3DBackprop"}getUserCode(){return`
      ${y("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              dotProd += dyValue * uniforms.avgMultiplier;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pd(s){const{inputs:t,backend:e,attrs:i}=s,{dy:o,input:r}=t,a=r,{filterSize:n,strides:u,pad:d,dimRoundingMode:l}=i,h=Be(a.shape,n,u,1,d,l),c=new Rd(h),p=1/(h.filterDepth*h.filterHeight*h.filterWidth),f=[{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.effectiveFilterDepth-1-h.padInfo.front,h.effectiveFilterHeight-1-h.padInfo.top,h.effectiveFilterWidth-1-h.padInfo.left]},{type:"int32",data:[h.effectiveFilterDepth,h.effectiveFilterHeight,h.effectiveFilterWidth]},{type:"int32",data:[h.outDepth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"float32",data:[p]}];return e.runWebGPUProgram(c,[o],a.dtype,f)}const $d={kernelName:Zs,backendName:"webgpu",kernelFunc:Pd};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dd(s){const{inputs:t,backend:e,attrs:i}=s,{dy:o,input:r}=t,a=r;it([o,r],"avgPoolGrad");const{filterSize:n,strides:u,pad:d}=i,l=$e(a.shape,n,u,1,d),h=new kd(l),c=1/(l.filterHeight*l.filterWidth),p=[{type:"int32",data:[l.strideHeight,l.strideWidth]},{type:"int32",data:[l.effectiveFilterHeight-1-l.padInfo.top,l.effectiveFilterWidth-1-l.padInfo.left]},{type:"int32",data:[l.dilationHeight,l.dilationWidth]},{type:"int32",data:[l.effectiveFilterHeight,l.effectiveFilterWidth]},{type:"int32",data:[l.outHeight]},{type:"int32",data:[l.outWidth]},{type:"float32",data:[c]}];return e.runWebGPUProgram(h,[o],a.dtype,p)}const Nd={kernelName:Js,backendName:"webgpu",kernelFunc:Dd};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zd(s){const{inputs:t,backend:e,attrs:i}=s,{a:o,b:r}=t,{transposeA:a,transposeB:n}=i;return Ve({a:o,b:r,transposeA:a,transposeB:n,backend:e})}const Ad={kernelName:eo,backendName:"webgpu",kernelFunc:zd};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Fd{constructor(t,e){this.variableNames=["source"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.rank=e.length,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.start=t,this.uniforms=`start : ${B(t.length)}, `,this.shaderKey="slice"}getUserCode(){const t=B(this.rank),e=Ld(this.rank);let i;return this.start.length===1?i=this.outputShape.map((r,a)=>"sourceLoc = uniforms.start + coords;"):i=this.outputShape.map((r,a)=>`sourceLoc.${Xe[a]} = uniforms.start.${Q(a)} + coords.${Xe[a]};`),`
      ${y("index")} {
        if (index < uniforms.size) {
          var sourceLoc : ${t};
          let coords = getCoordsFromIndex(index);
          ${i.join(`
`)}
          setOutputAtIndex(index, getSource(${e}));
        }
      }
    `}}const Xe=["x","y","z","w","u","v"];function Ld(s){if(s===1)return"sourceLoc";if(s<=6)return Xe.slice(0,s).map(t=>`sourceLoc.${t}`).join(",");throw Error(`Slicing for rank ${s} is not yet supported`)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ge(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{begin:r,size:a}=i,[n,u]=so(o,r,a);if(oo(o,n,u),e.shouldExecuteOnCPU([o])||o.dtype==="string"){const h=e.tensorMap.get(o.dataId),c=zu(h.values,n,u,o.shape,o.dtype);return e.makeTensorInfo(u,o.dtype,c)}if(N(u)===0)return e.makeTensorInfo(u,o.dtype,[]);const d=new Fd(n,u),l=[{type:"int32",data:n}];return e.runWebGPUProgram(d,[o],o.dtype,l)}const Ed={kernelName:to,backendName:"webgpu",kernelFunc:ge};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bd=s=>{const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{blockShape:r,crops:a}=i;E(o.shape.length<=4,()=>"batchToSpaceND for rank > 4 with a WebGPU backend not implemented yet");const n=r.reduce((C,w)=>C*w),u=Nt(o.shape,r,n),d=zt(u.length,r.length),l=At(o.shape,r,n),h=ro(a,r.length),c=ao(l,a,r.length),p=[],f=R({inputs:{x:o},backend:e,attrs:{shape:u}}),m=j({inputs:{x:f},backend:e,attrs:{perm:d}}),g=R({inputs:{x:m},backend:e,attrs:{shape:l}}),x=ge({inputs:{x:g},backend:e,attrs:{begin:h,size:c}});return p.push(f),p.push(m),p.push(g),p.forEach(C=>e.disposeData(C.dataId)),x},_d={kernelName:io,backendName:"webgpu",kernelFunc:Bd};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wd=`
  fn bincount_write(index: i32, value: f32) {
    ${te("&result[index]","value","float32")}
  }
`,Td=`
  fn bincount_write(index: i32, value: f32) {
    atomicStore(&result[index], bitcast<i32>(value));
  }
`;class Ot{constructor(t,e,i=!1){this.outputShape=[],this.variableNames=["x"],this.uniforms="binCountSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.hasWeights=!0,this.binaryOutput=!1,this.outputShape=t,this.rank=t.length,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.binaryOutput=i,i&&(this.atomic=!1),this.hasWeights=e,this.hasWeights&&this.variableNames.push("w"),this.shaderKey=`bincount_${this.hasWeights}_${this.binaryOutput}_${this.rank}`}getUserCode(){return`
    ${this.binaryOutput?Td:Wd}
  ${y("index")} {
    ${this.rank===1?`if (index < uniforms.xShape) {
      let indexVal = i32(getX(index));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(index)":"1."};
        bincount_write(indexVal, value);
      }
    }`:`let coord = getCoordsFromIndex(index);
    if (coordsInBounds2D(coord, uniforms.xShape)) {
      let indexVal = i32(getX(coord[0], coord[1]));
      if (indexVal < uniforms.binCountSize) {
        let value = ${this.binaryOutput?1:this.hasWeights?"getW(coord[0], coord[1])":"1."};
        bincount_write(coord.x * uniforms.binCountSize + indexVal, value);
      }
    }`}
  }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vd(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,weights:r}=t,{size:a}=i,n=N(o.shape),d=N(r.shape)>0,l=[a],h=r.dtype,c=X({backend:e,attrs:{shape:l,value:0,dtype:h}}),p=new Ot([n],d),f=[{type:"int32",data:[a]}],m=d?[o,r]:[o];return e.runWebGPUProgram(p,m,h,f,c)}const Ud={kernelName:no,backendName:"webgpu",kernelFunc:Vd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Md{constructor(t){this.outputShape=[],this.variableNames=["s0","s1"],this.uniforms="s0Size : i32, s1Size : i32, ",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="broadcastArgs"}getUserCode(){return`
  ${y("index")} {
    if (index < uniforms.size) {
      var s0 = 1.0;
      var s1 = 1.0;
      let indexS0 = index - uniforms.size + uniforms.s0Size;
      let indexS1 = index - uniforms.size + uniforms.s1Size;
      if (indexS0 >= 0) {
        s0 = getS0(indexS0);
      }
      if (indexS1 >= 0) {
        s1 = getS1(indexS1);
      }

      if (s0 == 1.0) {
        setOutputAtIndex(index, s1);
      } else if (s1 == 1.0) {
        setOutputAtIndex(index, s0);
      } else if (s0 != s1) {
        setOutputAtIndex(index, uniforms.NAN);
      } else {
        setOutputAtIndex(index, s0);
      }
    }
  }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Od(s){const{inputs:t,backend:e}=s,{s0:i,s1:o}=t;if(e.shouldExecuteOnCPU([i,o])){const l=e.tensorMap.get(i.dataId),h=e.tensorMap.get(o.dataId),c=l.values,p=h.values,f=J(Array.from(c),Array.from(p));return e.makeTensorInfo([f.length],"int32",Int32Array.from(f))}const r=N(i.shape),a=N(o.shape),n=Math.max(r,a),u=new Md(n),d=[{type:"int32",data:[r]},{type:"int32",data:[a]}];return e.runWebGPUProgram(u,[i,o],"int32",d)}const Gd={kernelName:uo,backendName:"webgpu",kernelFunc:Od};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gt=U({opType:$.NOT_EQUAL,dtype:"bool",cpuKernelImpl:ku}),Hd={kernelName:lo,backendName:"webgpu",kernelFunc:Gt};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ne(s){const{inputs:t,backend:e}=s,{input:i}=t,o=e.tensorMap.get(i.dataId);return K({inputs:{x:o.complexTensorInfos.real},backend:e})}const Xd={kernelName:co,backendName:"webgpu",kernelFunc:Ne};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kd(s,t){const e=new me(s.shape,b.TO_INT),i=t.runWebGPUProgram(e,[s],"int32");return{dataId:i.dataId,shape:i.shape,dtype:i.dtype}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ke(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{dtype:r}=i;if(r==="complex64"){if(o.dtype==="complex64")return K({inputs:{x:o},backend:e});const a=po(o.shape),n=Ke({inputs:{x:o},backend:e,attrs:{dtype:"float32"}}),u=ne({inputs:{real:n,imag:a},backend:e});return a.dispose(),e.disposeData(n.dataId),u}if(o.dtype==="complex64"){const a=Ne({inputs:{input:o},backend:e}),n=Ke({inputs:{x:a},backend:e,attrs:{dtype:r}});return e.disposeData(a.dataId),n}if(!fo(o.dtype,r)){const a=K({inputs:{x:o},backend:e});return{dataId:a.dataId,shape:a.shape,dtype:r}}if(e.shouldExecuteOnCPU([o])){const a=e.tensorMap.get(o.dataId).values,[n,u,d]=ru(a,o.shape,o.dtype,r);return e.makeTensorInfo(n,u,d)}if(r==="int32")return Kd(o,e);if(r==="bool"){const a=e.makeTensorInfo([],"bool",Dt("bool",1)),u=Gt({inputs:{a:o,b:a},backend:e});return e.disposeData(a.dataId),u}throw new Error(`Error in Cast: failed to cast ${o.dtype} to ${r}`)}const qd={kernelName:ho,backendName:"webgpu",kernelFunc:Ke};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yd=L({opType:b.CEIL,cpuKernelImpl:au}),jd={kernelName:mo,backendName:"webgpu",kernelFunc:Yd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qd{constructor(t){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workPerThread=4,this.workgroupSize=[64,1,1],this.outputComponent=4,this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.shaderKey="clipVec4"}getUserCode(){return`
      ${y("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          var clampedValue = clamp(
              value, vec4<f32>(uniforms.minVal), vec4<f32>(uniforms.maxVal));
          clampedValue = select(clampedValue, value, isnanVec4(value));
          setOutputAtIndex(index, clampedValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zd{constructor(t){this.variableNames=["A"],this.uniforms="minVal : f32, maxVal : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="clip"}getUserCode(){return`
      ${y("index")} {
        if(index < uniforms.size) {
          let value = getAByOutputIndex(index);
          if (isnan(value)) {
            setOutputAtIndex(index, value);
            return;
          }
          setOutputAtIndex(index, clamp(value, uniforms.minVal, uniforms.maxVal));
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jd(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{clipValueMin:r,clipValueMax:a}=i;let n;const u=[{type:"float32",data:[r]},{type:"float32",data:[a]}];return N(o.shape)%4===0?n=new Qd(o.shape):n=new Zd(o.shape),e.runWebGPUProgram(n,[o],o.dtype,u)}const el={kernelName:go,backendName:"webgpu",kernelFunc:Jd};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class tl{constructor(t){this.outputShape=[],this.variableNames=["real","imag"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="complexAbs"}getUserCode(){return`
    ${y("index")} {
      if (index < uniforms.size) {
        let re = abs(getRealByOutputIndex(index));
        let im = abs(getImagByOutputIndex(index));
        let mx = max(re, im);

        // The length function in wgsl may be not underflow-safe on some GPUs.
        // So the safe solution is to ensure underflow-safety in all cases.
        setOutputAtIndex(index, select(mx * length(vec2<f32>(1, min(re, im)/mx)), 0.0, mx == 0.0));
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function St(s,t){return{dataId:t.dataId,dtype:t.dtype,shape:s.shape}}function sl(s){const{inputs:t,backend:e}=s,{x:i}=t,o=e.tensorMap.get(i.dataId),r=new tl(i.shape),a=[St(i,o.complexTensorInfos.real),St(i,o.complexTensorInfos.imag)];return e.runWebGPUProgram(r,a,a[0].dtype)}const ol={kernelName:xo,backendName:"webgpu",kernelFunc:sl};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class il{constructor(t){this.uniforms="",this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=ve(t,1),this.variableNames=t.map((e,i)=>`T${i}`),this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]),this.offsetLength=t.length-1;for(let e=0;e<this.offsetLength;e++)this.uniforms+=`offset${e} : i32,`;this.shaderKey="concat"}getUserCode(){const t=[];if(this.offsetLength>0){t.push("if (yC < uniforms.offset0){ setOutputAtCoords(coords.x, coords.y, getT0(yR, yC)); }");for(let r=1;r<this.offsetLength;r++)t.push(`else if (yC < uniforms.offset${[r]}){ setOutputAtCoords(coords.x, coords.y, getT${r}(yR, yC - uniforms.offset${r-1})); }`);const i=this.offsetLength,o=this.offsetLength-1;t.push(`else { setOutputAtCoords(coords.x, coords.y, getT${i}(yR, yC - uniforms.offset${o})); }`)}else t.push("setOutputAtCoords(coords.x, coords.y, getT0(yR, yC));");return`
      ${y("index")} {
        for(var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let flatIndex = index * ${this.workPerThread} + i;
          if(flatIndex < uniforms.size) {
            let coords = getCoordsFromIndex(flatIndex);
            let yR = coords.x;
            let yC = coords.y;

            ${t.join(`
        `)}
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ue(s){const{inputs:t,backend:e}=s,{input:i}=t,o=e.tensorMap.get(i.dataId);return K({inputs:{x:o.complexTensorInfos.imag},backend:e})}const rl={kernelName:Co,backendName:"webgpu",kernelFunc:Ue};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function we(s,t,e){const i=s[0].dtype;if(i==="complex64"){const f=s.map(w=>Ne({inputs:{input:w},backend:e})),m=s.map(w=>Ue({inputs:{input:w},backend:e})),g=we(f,t,e),x=we(m,t,e),C=ne({inputs:{real:g,imag:x},backend:e});return f.forEach(w=>e.disposeData(w.dataId)),m.forEach(w=>e.disposeData(w.dataId)),e.disposeData(g.dataId),e.disposeData(x.dataId),C}let o=e.shouldExecuteOnCPU(s);if(i==="string"&&(o=!0),o){const f=s.map(k=>{const D=[-1,N(k.shape.slice(t))];return R({inputs:{x:k},backend:e,attrs:{shape:D}})}),m=f.map(k=>({vals:e.readSync(k.dataId),shape:k.shape})),g=ve(f.map(k=>k.shape),1),x=f[0].shape[0]===1,C=nu(m,g,i,x),w=ve(s.map(k=>k.shape),t),v=e.makeTensorInfo(w,i,C);return f.forEach(k=>e.disposeData(k.dataId)),v}const r=e.device.limits.maxStorageBuffersPerShaderStage-1;if(s.length>r){const f=[];for(let g=0;g<s.length;g+=r){const x=s.slice(g,g+r);f.push(we(x,t,e))}const m=we(f,t,e);for(const g of f)e.disposeData(g.dataId);return m}const{tensors2D:a,outShape:n}=al(s,t,e),u=a.map(f=>f.shape),d=new il(u),l=[],h=new Array(u.length-1);if(h.length>0){h[0]=u[0][1],l.push({type:"int32",data:[h[0]]});for(let f=1;f<h.length;f++)h[f]=h[f-1]+u[f][1],l.push({type:"int32",data:[h[f]]})}const c=e.runWebGPUProgram(d,a,a[0].dtype,l);a.forEach(f=>e.disposeData(f.dataId));const p=R({inputs:{x:c},backend:e,attrs:{shape:n}});return e.disposeData(c.dataId),p}function al(s,t,e){const i=ve(s.map(r=>r.shape),t);return{tensors2D:s.map(r=>R({inputs:{x:r},backend:e,attrs:{shape:[N(r.shape.slice(0,t)),N(r.shape.slice(t))]}})),outShape:i}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ht(s){const{inputs:t,backend:e,attrs:i}=s,{axis:o}=i,r=re(o,t[0].shape)[0],a=t.map(d=>d.shape);bo(a,r);const n=ve(t.map(d=>d.shape),r);if(N(n)===0)return e.makeTensorInfo(n,t[0].dtype,[]);const u=t.filter(d=>N(d.shape)>0);return u.length===1?K({inputs:{x:u[0]},backend:e}):we(u,r,e)}const nl={kernelName:wo,backendName:"webgpu",kernelFunc:Ht};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ul(s,t,e,i,o=!1,r=null,a=!1,n=4,u=4,d=4){const l=A=>{switch(A){case 1:return"resData = f32(x[xIndex]);";case 3:return"resData = vec3<f32>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);";case 4:return"resData = vec4<f32>(x[xIndex / 4]);";default:throw new Error(`innerElementSize ${A} is not supported.`)}},h=A=>{switch(A){case 1:return"return f32(W[row * uniforms.wShape[3] + col]);";case 4:return"return vec4<f32>(W[(row * uniforms.wShape[3] + col) / 4]);";default:throw new Error(`innerElementSize ${A} is not supported.`)}},c=s?`
      let coord = vec4<i32>(batch, xRow, xCol, xCh);
      `:`
      let coord = vec4<i32>(batch, xCh, xRow, xCol);
      `,p=s?`
      let coords = vec4<i32>(
        batch,
        row / outWidth,
        row % outWidth,
        col);
      `:`
      let coords = vec4<i32>(
        batch,
        row,
        col / outWidth,
        col % outWidth);
      `,f=s?"uniforms.xShape[1]":"uniforms.xShape[2]",m=s?"uniforms.xShape[2]":"uniforms.xShape[3]",g=s?"row":"col",x=s?"col":"row",C=`
      let inChannels = uniforms.wShape[2];
      let outWidth = ${s?"uniforms.outShape[2]":"uniforms.outShape[3]"};
      let outRow = ${g} / outWidth;
      let outCol = ${g} % outWidth;

      let WRow = ${x} / (uniforms.filterDims[1] * inChannels);
      let WCol = ${x} / inChannels % uniforms.filterDims[1];
      let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * WRow - uniforms.pads[0];
      let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * WCol - uniforms.pads[1];
      let xCh = ${x} % inChannels;
      var resData = ${z(n)}(0.0);
      // The bounds checking is always needed since we use it to pad zero for
      // the 'same' padding type.
      if (xRow >= 0 && xRow < ${f} && xCol >= 0 && xCol < ${m}) {
        ${c}
        let xIndex = getIndexFromCoords4D(coord, uniforms.xShape);
        ${l(n)}
      }
      return resData;`,w=s?t&&i?`
      ${C}`:`
      if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${C}
      }
      return ${z(n)}(0.0);`:i&&e?`
      ${C}`:`
      if (row < uniforms.dimInner && col < uniforms.dimBOuter) {
        ${C}
      }
      return ${z(n)}(0.0);`,v=`${h(u)}`,k=z(d),P=z(s?n:u),D=z(s?u:n);return`
      ${Z(r,a,d===4,4)}
      fn mm_readA(batch: i32, row : i32, col : i32) -> ${P} {
        ${s?w:v}
      }

      fn mm_readB(batch: i32, row : i32, col : i32) -> ${D} {
        ${s?v:w}
      }

      fn mm_write(batch: i32, row : i32, col : i32, valueIn : ${k}) {
        if (row < uniforms.dimAOuter && col < uniforms.dimBOuter)
        {
        var value = valueIn;
        let outWidth = ${s?"uniforms.outShape[2]":"uniforms.outShape[3]"};
        ${p}
        ${ae(o,r)}
        setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }`}class dl{constructor(t,e,i,o,r=!1,a=null,n=!1,u=!1){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t.outShape,this.isChannelsLast=t.dataFormat==="channelsLast",this.isVec4=((t.inChannels%4===0||t.inChannels%3===0)&&this.isChannelsLast||t.outWidth%4===0&&!this.isChannelsLast)&&t.outChannels%4===0,this.dispatchLayout=this.isChannelsLast?{x:[3],y:[1,2],z:[0]}:{x:[2,3],y:[1],z:[0]},this.workgroupSize=tt(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=st(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4?(this.outputComponent=4,this.isChannelsLast&&t.inChannels%4!==0?(this.innerElementSize=3,this.variableComponents=[1,4]):(this.innerElementSize=4,this.variableComponents=[4,4]),r&&(this.variableNames.push("bias"),this.variableComponents.push(4)),n&&(this.variableNames.push("preluActivationWeights"),this.variableComponents.push(4))):(this.innerElementSize=this.elementsPerThread[0],r&&this.variableNames.push("bias"),n&&this.variableNames.push("preluActivationWeights")),this.sequentialAccessByThreads=u,this.addBias=r,this.activation=a,this.hasPreluActivationWeights=n,this.tileAOuter=this.workgroupSize[1]*this.elementsPerThread[1],this.tileBOuter=this.workgroupSize[0]*this.elementsPerThread[0],this.tileInner=Math.max(this.workgroupSize[0]*this.innerElementSize,this.workgroupSize[1]),this.fitAOuter=e%this.tileAOuter===0,this.fitBOuter=i%this.tileBOuter===0,this.fitInner=o%this.tileInner===0,this.shaderKey=`conv2DMM_${this.elementsPerThread}_${this.activation}}_${this.fitAOuter}_${this.fitBOuter}_${this.fitInner}_${this.isVec4}_${this.innerElementSize}_${this.isChannelsLast}_${this.sequentialAccessByThreads}`}getUserCode(){const t=this.isVec4?We(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner):Te(this.elementsPerThread,this.workgroupSize,!this.isChannelsLast,this.tileInner,!1,null,this.sequentialAccessByThreads),e=this.isVec4?[this.innerElementSize,4,4]:[1,1,1];return`
    ${ul(this.isChannelsLast,this.fitAOuter,this.fitBOuter,this.fitInner,this.addBias,this.activation,this.hasPreluActivationWeights,e[0],e[1],e[2])}
    ${t}
  `}}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ll{constructor(t,e=!1,i=null,o=!1){this.variableNames=["x","W"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>,",this.workgroupSize=[4,4,8],this.outputShape=t.outShape,this.isChannelsLast=t.dataFormat==="channelsLast",this.dispatchLayout=this.isChannelsLast?{x:[2],y:[1],z:[0,3]}:{x:[3],y:[2],z:[0,1]},this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.addBias=e,this.activation=i,this.hasPreluActivationWeights=o,e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.shaderKey=`conv2dnaive_${this.activation}_${this.isChannelsLast}`}getUserCode(){return`
       ${Z(this.activation,this.hasPreluActivationWeights,!1,4)}
       fn readInp(batch : i32, row : i32, col : i32, chan : i32) -> f32{
         let coords = vec4<i32>(batch, row, col, chan);
         if (coordsInBounds4D(coords, uniforms.xShape)) {
           return  getX(batch, row, col, chan);
         } else {
          return 0.0;
         }
       }
       fn readFilt(row : i32, col : i32, xChannel : i32, outChannel : i32) -> f32{
         let coords = vec4<i32>(row, col, xChannel, outChannel);
         if(coordsInBounds4D(coords, uniforms.wShape)) {
           return getW(row, col, xChannel, outChannel);
          } else {
            return 0.0;
          }
       }
       fn writeResult(batch : i32, row : i32, col : i32, chan : i32, valueIn : f32) {
         let coords = ${this.isChannelsLast?"vec4<i32>(batch, row, col, chan);":"vec4<i32>(batch, chan, row, col);"}
         if (coordsInBounds4D(coords, uniforms.outShape)) {
           var value = valueIn;
           ${ae(this.addBias,this.activation)}
           setOutputAtCoords(coords.x, coords.y, coords.z, coords.w, value);
         }
       }
       ${y("index")} {
         let coords = getOutputCoords();
         let batch = coords[0];
         let outChannel = ${this.isChannelsLast?"coords[3];":"coords[1];"}
         let outRow = ${this.isChannelsLast?"coords[1];":"coords[2];"}
         let outCol = ${this.isChannelsLast?"coords[2];":"coords[3];"}
         var acc : f32 = 0.0;
         for (var row = 0; row < uniforms.filterDims[0]; row = row + 1) {
           for (var col = 0; col < uniforms.filterDims[1]; col = col + 1) {
             let xRow = outRow * uniforms.strides[0] + uniforms.dilations[0] * row - uniforms.pads[0];
             let xCol = outCol * uniforms.strides[1] + uniforms.dilations[1] * col - uniforms.pads[1];
             for (var xChannel = 0; xChannel < ${this.isChannelsLast?"uniforms.xShape[3];":"uniforms.xShape[1];"} xChannel = xChannel + 1) {
               ${this.isChannelsLast?"let v = readInp(batch, xRow, xCol, xChannel);":"let v = readInp(batch, xChannel, xRow, xCol);"}
               let f = readFilt(row, col, xChannel, outChannel);
               acc = acc + v * f;
             }
           }
         }
         writeResult(batch, outRow, outCol, outChannel, acc);
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cl{constructor(t,e){this.variableNames=["x"],this.uniforms=`pads : vec2<i32>, strides : vec2<i32>, dilations : vec2<i32>, outWidth : i32, itemsPerBlockRow : i32,
       inChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=e,this.shaderKey=`im2col_${this.isChannelsLast}`}getUserCode(){const t=this.isChannelsLast?1:2,e=this.isChannelsLast?2:3,i=this.isChannelsLast?"coords[1]":"coords[2]",o=this.isChannelsLast?"coords[2]":"coords[1]",r=this.isChannelsLast?"getX(batch, xRow, xCol, ch)":"getX(batch, ch, xRow, xCol)";return`
    ${y("index")} {
      let coords = getCoordsFromIndex(index);
      if(index < uniforms.size) {
        let batch = coords[0];
        let row = ${i};
        let col = ${o};
        let offsetY = (row / uniforms.outWidth) * uniforms.strides[0] - uniforms.pads[0];
        let xRow = offsetY + uniforms.dilations[0] * (col / uniforms.itemsPerBlockRow);
        var value = 0.0;
        if(xRow < uniforms.xShape[${t}] && xRow >= 0) {
          let offsetX = (row % uniforms.outWidth) * uniforms.strides[1] -
              uniforms.pads[1];
          let xCol = offsetX + uniforms.dilations[1] * ((col %
              uniforms.itemsPerBlockRow) / uniforms.inChannels);
          let ch = col % uniforms.inChannels;
          if(xCol < uniforms.xShape[${e}] && xCol >= 0) {
            value = ${r};
          }
        }
        setOutputAtIndex(index, value);
      }
    }
   `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Le(s,t){const e=s.length;return e>=3?t?[...s.slice(0,-3),s[e-3]*s[e-2],s[e-1]]:[...s.slice(0,-3),s[e-3],s[e-2]*s[e-1]]:!t&&e===1&&s[0]>1?[s[0],1]:null}function hl({x:s,filter:t,convInfo:e,backend:i,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:a=0,activation:n=null}){const u=e.dataFormat==="channelsLast",d=!u,l=!1,h=u&&e.filterHeight===e.inHeight&&e.filterWidth===e.inWidth&&e.padInfo.type==="VALID",c=[];let p,f;if(h){const x=e.inHeight*e.inWidth*e.inChannels;p=R({inputs:{x:s},backend:i,attrs:{shape:[1,e.batchSize,x]}}),f=R({inputs:{x:t},backend:i,attrs:{shape:[1,x,e.outChannels]}})}else p=R({inputs:{x:s},backend:i,attrs:{shape:u?[e.batchSize,e.inHeight*e.inWidth,e.inChannels]:[e.batchSize,e.inChannels,e.inHeight*e.inWidth]}}),f=R({inputs:{x:t},backend:i,attrs:{shape:[1,e.inChannels,e.outChannels]}});if(c.push(p),c.push(f),r!=null){const x=Le(r.shape,u);x!=null&&(r=R({inputs:{x:r},backend:i,attrs:{shape:x}}),c.push(r))}if(o!=null){const x=Le(o.shape,u);x!=null&&(o=R({inputs:{x:o},backend:i,attrs:{shape:x}}),c.push(o))}const m=Ve({a:u?p:f,b:u?f:p,transposeA:d,transposeB:l,backend:i,bias:o,activation:n,preluActivationWeights:r,leakyreluAlpha:a}),g=R({inputs:{x:m},backend:i,attrs:{shape:e.outShape}});c.push(m);for(const x of c)i.disposeData(x.dataId);return g}function pl({x:s,filter:t,convInfo:e,backend:i,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:a=0,activation:n=null}){const{filterWidth:u,filterHeight:d,inChannels:l,strideWidth:h,strideHeight:c,padInfo:p,outWidth:f,outHeight:m,dilationWidth:g,dilationHeight:x,dataFormat:C}=e,w=C==="channelsLast",v=u*d*l,k=m*f,P=w?[e.batchSize,k,v]:[e.batchSize,v,k],D=new cl(P,w),F=[{type:"int32",data:[p.top,p.left]},{type:"int32",data:[c,h]},{type:"int32",data:[x,g]},{type:"int32",data:[f]},{type:"int32",data:[l*u]},{type:"int32",data:[l]}],A=i.runWebGPUProgram(D,[s],s.dtype,F),_=[];_.push(A);const W=R({inputs:{x:t},backend:i,attrs:{shape:[1,v,-1]}});if(_.push(W),r!=null){const G=Le(r.shape,w);G!=null&&(r=R({inputs:{x:r},backend:i,attrs:{shape:G}}),_.push(r))}if(o!=null){const G=Le(o.shape,w);G!=null&&(o=R({inputs:{x:o},backend:i,attrs:{shape:G}}),_.push(o))}const T=Ve({a:w?A:W,b:w?W:A,transposeA:!w,transposeB:!1,backend:i,bias:o,activation:n,preluActivationWeights:r,leakyreluAlpha:a}),M=R({inputs:{x:T},backend:i,attrs:{shape:e.outShape}});_.push(T);for(const G of _)i.disposeData(G.dataId);return M}function Xt({x:s,filter:t,convInfo:e,backend:i,bias:o=null,preluActivationWeights:r=null,leakyreluAlpha:a=0,activation:n=null}){const u=o!=null,d=r!=null,l=e.dataFormat==="channelsLast",h=l&&e.filterHeight===e.inHeight&&e.filterWidth===e.inWidth&&e.padInfo.type==="VALID",c=V().getBool("WEBGPU_USE_NAIVE_CONV2D_DEBUG");if(!c&&(h||e.filterHeight===1&&e.filterWidth===1&&e.dilationHeight===1&&e.dilationWidth===1&&e.strideHeight===1&&e.strideWidth===1&&(e.padInfo.type==="SAME"||e.padInfo.type==="VALID")))return hl({x:s,filter:t,convInfo:e,backend:i,bias:o,activation:n,preluActivationWeights:r,leakyreluAlpha:a});const p=V().getNumber("WEBGPU_THRESHOLD_TO_INCREASE_WORKGROUPS_FOR_MATMUL"),f=p>-1?p:i.thresholdToIncreaseWorkgroups,m=e.batchSize*Math.ceil(e.outHeight*e.outWidth/32)*Math.ceil(e.outChannels/32);if(V().getBool("WEBGPU_CONV_SEPARATE_IM2COL_SHADER")||m<=f)return pl({x:s,filter:t,convInfo:e,backend:i,bias:o,preluActivationWeights:r,leakyreluAlpha:a,activation:n});let g;const x=[e.padInfo.top,e.padInfo.left],C=[{type:"int32",data:[e.filterHeight,e.filterWidth]},{type:"int32",data:[...x]},{type:"int32",data:[e.strideHeight,e.strideWidth]},{type:"int32",data:[e.dilationHeight,e.dilationWidth]}];if(c)g=new ll(e,u,n,d);else{const P=l?e.outHeight*e.outWidth:e.outChannels,D=l?e.outChannels:e.outHeight*e.outWidth,F=e.filterHeight*e.filterWidth*e.inChannels;C.push({type:"int32",data:[P]},{type:"int32",data:[D]},{type:"int32",data:[F]});const A=i.adapterInfo.isIntel();g=new dl(e,P,D,F,u,n,d,A)}const w=[],v=[s,t];u&&(!l&&o.shape.length===1&&(o=R({inputs:{x:o},backend:i,attrs:{shape:[o.shape[0],1,1]}}),w.push(o)),v.push(o)),d&&(!l&&r.shape.length===1&&(r=R({inputs:{x:r},backend:i,attrs:{shape:[r.shape[0],1,1]}}),w.push(r)),v.push(r)),n==="leakyrelu"&&(C.push({type:"float32",data:[a]}),g.uniforms+=" alpha : f32,");const k=i.runWebGPUProgram(g,v,s.dtype,C);for(const P of w)i.disposeData(P.dataId);return k}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fl(s){const{inputs:t,attrs:e,backend:i}=s,{x:o,filter:r}=t,{strides:a,pad:n,dataFormat:u,dilations:d,dimRoundingMode:l}=e,h=De(u),c=ee(o.shape,r.shape,a,d,n,l,!1,h);return Xt({x:o,filter:r,convInfo:c,backend:i})}const ml={kernelName:yo,backendName:"webgpu",kernelFunc:fl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gl{constructor(t){this.variableNames=["dy","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>,",this.workgroupSize=[64,1,1],this.size=!1,this.isVec4=!1,this.workPerThread=1,this.outputShape=t.inShape,this.isChannelsLast=t.dataFormat==="channelsLast",this.isVec4=this.isChannelsLast&&t.outChannels%4===0&&t.inChannels%4===0,this.isVec4?(this.workPerThread=2,this.outputComponent=4,this.workgroupSize=[4,4,4],this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[4,this.workPerThread,1])):(this.size=!0,this.workPerThread=1,this.workgroupSize=[64,1,1],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize)),this.shaderKey=`conv2DDerInput_${this.isChannelsLast}_${this.isVec4}_${this.workPerThread}`}getUserCode(){const t=this.isChannelsLast?1:2,e=this.isChannelsLast?2:3,i=this.isChannelsLast?3:1,o=`
    ${y()} {
      let batch = i32(globalId.z) / uniforms.outShape[1];
      let r = i32(globalId.z) % uniforms.outShape[1];
      let c = i32(globalId.y) * ${this.workPerThread};
      let d1 = i32(globalId.x) * 4;

      let dyCorner = vec2<i32>(r, c) - uniforms.pads;

      // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
      // ? = to be determined. : = across all values in that axis.
      var dotProd: array<vec4<f32>, ${this.workPerThread}>;
      for (var i = 0; i < ${this.workPerThread}; i++) {
        dotProd[i] = vec4<f32>(0.0);
      }
      for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
        let dyR = f32(dyCorner.x + wR) / f32(uniforms.strides.x);
        let wRPerm = uniforms.filterDims.x - 1 - wR;
        if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) ||
            fract(dyR) > 0.0) {
          continue;
        }
        let idyR = i32(dyR);

        for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
          let dyC = f32(dyCorner.y + wC) / f32(uniforms.strides.y);
          let dyC2 = f32(dyCorner.y + 1 + wC) / f32(uniforms.strides.y);
          let wCPerm = uniforms.filterDims.y - 1 - wC;
          var bDyCVal = true;
          var bDyCVal2 = true;
          if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
              fract(dyC) > 0.0) {
            bDyCVal = false;
          }
          if (dyC2 < 0.0 || dyC2 >= f32(uniforms.outBackprop[2]) ||
              fract(dyC2) > 0.0) {
            bDyCVal2 = false;
          }

          let idyC = i32(dyC);
          let idyC2 = i32(dyC2);
          if (bDyCVal && bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
              xValue = getDy(batch, idyR, idyC2, d2);
              dotProd[1] = dotProd[1] + vec4<f32>(dot(xValue, wValue0),
                                                  dot(xValue, wValue1),
                                                  dot(xValue, wValue2),
                                                  dot(xValue, wValue3));
            }
          } else if (bDyCVal) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[0] = dotProd[0] + tmpval;
            }
          } else if (bDyCVal2) {
            let d2Length = uniforms.outBackprop[3];
            for (var d2 = 0; d2 < d2Length; d2 = d2 + 4) {
              let wValue0 = getW(wRPerm, wCPerm, d1, d2);
              let wValue1 = getW(wRPerm, wCPerm, d1 + 1, d2);
              let wValue2 = getW(wRPerm, wCPerm, d1 + 2, d2);
              let wValue3 = getW(wRPerm, wCPerm, d1 + 3, d2);
              var xValue =  getDy(batch, idyR, idyC2, d2);
              let tmpval = vec4<f32>(dot(xValue, wValue0),
                                     dot(xValue, wValue1),
                                     dot(xValue, wValue2),
                                     dot(xValue, wValue3));
              dotProd[1] = dotProd[1] + tmpval;
            }
          }
        }
      }

      for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
        let coords = vec4<i32>(batch, r, c + i, d1);
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], dotProd[i]);
        }
      }
    }
    `;return this.isVec4?`
    ${o}
    `:`
    ${y("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[${i}];

        let dyCorner = vec2<i32>(coords[${t}], coords[${e}]) - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims.x; wR = wR + 1) {
          let dyR = (f32(dyRCorner) + f32(wR)) / f32(uniforms.strides.x);
          let wRPerm = uniforms.filterDims.x - 1 - wR;
          if (dyR < 0.0 || dyR >= f32(uniforms.outBackprop[1]) || fract(dyR) > 0.0 ||
              wRPerm < 0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims.y; wC = wC + 1) {
            let dyC = (f32(dyCCorner) + f32(wC)) / f32(uniforms.strides.y);
            let wCPerm = uniforms.filterDims.y - 1 - wC;
            if (dyC < 0.0 || dyC >= f32(uniforms.outBackprop[2]) ||
                fract(dyC) > 0.0 || wCPerm < 0) {
              continue;
            }
            let idyC = i32(dyC);

            for (var d2 = 0; d2 < uniforms.outBackprop[3]; d2 = d2 + 1) {
              let xValue = ${this.isChannelsLast?"getDy(batch, idyR, idyC, d2)":"getDy(batch, d2, idyR, idyC)"};
              let wValue = getW(wRPerm, wCPerm, d1, d2);
              dotProd = dotProd + xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class xl{constructor(t){this.variableNames=["x","dy"],this.uniforms="pads : vec2<i32>, strides : vec2<i32>, batchSize : i32, outHeight : i32, outWidth : i32, inHeight : i32, inWidth : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t.dataFormat==="channelsLast",this.shaderKey=`conv2DDerFilter_${this.isChannelsLast}`}getUserCode(){return`
    ${y("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let d2 = coords[3];

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b = b + 1) {
          for (var yR = 0; yR < uniforms.outHeight; yR = yR + 1) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];
            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC = yC + 1) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              if (${this.isChannelsLast}) {
                let dyValue = getDy(b, yR, yC, d2);
                let xValue = getX(b, xR, xC, d1);
                dotProd = dotProd + xValue * dyValue;
              } else {
                let dyValue = getDy(b, d2, yR, yC);
                let xValue = getX(b, d1, xR, xC);
                dotProd = dotProd + xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class Cl{constructor(t){this.variableNames=["x","dy"],this.uniforms=`pads : vec3<i32>, strides : vec3<i32>, batchSize : i32, outDepth : i32,
       outHeight : i32, outWidth : i32, inDepth : i32, inHeight : i32, inWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerFilter"}getUserCode(){return`
    ${y("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wF = coords.x;
        let wR = coords.y;
        let wC = coords.z;
        let d1 = coords.w;
        let d2 = coords.u;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yF = 0; yF < uniforms.outDepth; yF++) {
            let xF = wF + yF * uniforms.strides[0] - uniforms.pads[0];
            if (xF < 0 || xF >= uniforms.inDepth) {
              continue;
            }

            for (var yR = 0; yR < uniforms.outHeight; yR++) {
              let xR = wR + yR * uniforms.strides[1] - uniforms.pads[1];
              if (xR < 0 || xR >= uniforms.inHeight) {
                continue;
              }

              for (var yC = 0; yC < uniforms.outWidth; yC++) {
                let xC = wC + yC * uniforms.strides[2] - uniforms.pads[2];
                if (xC < 0 || xC >= uniforms.inWidth) {
                  continue;
                }

                let dyValue = getDy(b, yF, yR, yC, d2);
                let xValue = getX(b, xF, xR, xC, d1);
                dotProd += xValue * dyValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}class wl{constructor(t){this.variableNames=["dy","W"],this.uniforms=`filterDims : vec3<i32>, pads : vec3<i32>, strides : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32, outChannels : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3DDerInput"}getUserCode(){return`
    ${y("index")} {
      if(index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let d1 = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyFCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let dyF = f32(dyFCorner + wF) / f32(uniforms.strides[0]);
          if (dyF < 0.0 || dyF >= f32(uniforms.outDepth) || fract(dyF) > 0.0) {
            continue;
          }
          let idyF = i32(dyF);

          let wFPerm = uniforms.filterDims[0] - 1 - wF;

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            let wRPerm = uniforms.filterDims[1] - 1 - wR;

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let wCPerm = uniforms.filterDims[2] - 1 - wC;

              for (var d2 = 0; d2 < uniforms.outChannels; d2++) {
                let xValue = getDy(batch, idyF, idyR, idyC, d2);
                let wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bl(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,dy:r}=t,{strides:a,pad:n,dataFormat:u,dimRoundingMode:d,filterShape:l}=i,h=De(u),c=ee(o.shape,l,a,1,n,d,!1,h),p=new xl(c),f=[{type:"int32",data:[c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.batchSize]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]},{type:"int32",data:[c.inHeight]},{type:"int32",data:[c.inWidth]}];return e.runWebGPUProgram(p,[o,r],o.dtype,f)}const yl={kernelName:So,backendName:"webgpu",kernelFunc:bl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sl(s=4){const t=r=>{switch(r){case 1:return"return W[getIndexFromCoords4D(coord, uniforms.wShape)];";case 4:return`
            let coord1 = vec4<i32>(coordX, coordY, col + 1, rowInner);
            let coord2 = vec4<i32>(coordX, coordY, col + 2, rowInner);
            let coord3 = vec4<i32>(coordX, coordY, col + 3, rowInner);
            let v0 = W[getIndexFromCoords4D(coord, uniforms.wShape)];
            let v1 = W[getIndexFromCoords4D(coord1, uniforms.wShape)];
            let v2 = W[getIndexFromCoords4D(coord2, uniforms.wShape)];
            let v3 = W[getIndexFromCoords4D(coord3, uniforms.wShape)];
            return vec4<f32>(v0, v1, v2, v3);
            `;default:throw new Error(`innerElementSize ${r} is not supported.`)}},i=`if (row < uniforms.dimAOuter && col < uniforms.dimInner) {
        ${`
      let outRow = row / uniforms.outShape[2];
      let outCol = row % uniforms.outShape[2];

      let WRow = col / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
      let WCol = col / uniforms.outBackprop[3] % uniforms.filterDims[1];
      let xR = f32(outRow - uniforms.pads[0] + WRow) / f32(uniforms.strides[0]);
      let xC = f32(outCol - uniforms.pads[1] + WCol) / f32(uniforms.strides[1]);
      if (xR < 0.0 || xR >= f32(uniforms.outBackprop[1]) || fract(xR) > 0.0) {
        return ${z(s)}(0.0);
      }
      if (xC < 0.0 || xC >= f32(uniforms.outBackprop[2]) || fract(xC) > 0.0) {
        return ${z(s)}(0.0);
      }
      let coord = vec4<i32>(
          batch,
          i32(xR),
          i32(xC),
          col % uniforms.outBackprop[3]);
      return x[getIndexFromCoords4D(coord, uniforms.xShape)/${s}];`}
      }
      return ${z(s)}(0.0);`;return`
  fn mm_readA(batch: i32, row : i32, col : i32) -> ${z(s)} {
    ${i}
  }

  fn mm_readB(batch: i32, row : i32, col : i32) -> ${z(s)} {
    let coordX = uniforms.filterDims.x - 1 -
        row / (uniforms.filterDims[1] * uniforms.outBackprop[3]);
    let coordY = uniforms.filterDims.y - 1 -
        (row / uniforms.outBackprop[3]) % uniforms.filterDims[1];
    if (row < uniforms.dimInner && col < uniforms.dimBOuter &&
        coordX >= 0 && coordY >= 0) {
      let rowInner = row % uniforms.outBackprop[3];
      let coord = vec4<i32>(coordX, coordY, col, rowInner);
      ${t(s)}
    }
    return ${z(s)}(0.0);
  }

  fn mm_write(batch: i32, row : i32, col : i32, valueInput : ${z(s)}) {
    if (row < uniforms.dimAOuter && col < uniforms.dimBOuter) {
      var value = valueInput;
      let outCoord = vec4<i32>(
          batch,
          row / uniforms.outShape[2],
          row % uniforms.outShape[2],
          col);
      result[getIndexFromCoords4D(outCoord, uniforms.outShape)/${s}] = value;
    }
  }`}class vl{constructor(t){this.variableNames=["x","W"],this.uniforms="filterDims : vec2<i32>, pads : vec2<i32>, strides : vec2<i32>, outBackprop : vec4<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32,",this.outputShape=t.inShape,E(t.dataFormat==="channelsLast",()=>"TODO: NCHW is unimplemented"),this.isVec4=t.inChannels%4===0&&t.outChannels%4===0,this.dispatchLayout={x:[3],y:[1,2],z:[0]},this.workgroupSize=tt(this.dispatchLayout,this.outputShape,this.isVec4),this.elementsPerThread=st(this.dispatchLayout,this.outputShape,this.isVec4),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,this.elementsPerThread),this.isVec4&&(this.outputComponent=4,this.variableComponents=[4,1]),this.shaderKey=`conv2DDerInputMM_${this.isVec4}_${this.elementsPerThread}`}getUserCode(){const t=this.isVec4?We(this.elementsPerThread,this.workgroupSize):Te(this.elementsPerThread,this.workgroupSize);return`
    ${Sl(this.isVec4?4:1)}
    ${t}
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Il(s){const{inputs:t,backend:e,attrs:i}=s,{dy:o,filter:r}=t,{inputShape:a,strides:n,pad:u,dataFormat:d,dimRoundingMode:l}=i,h=De(d),c=ee(a,r.shape,n,1,u,l,!1,h),p=[{type:"int32",data:[c.filterHeight,c.filterWidth]},{type:"int32",data:[c.filterHeight-1-c.padInfo.top,c.filterWidth-1-c.padInfo.left]},{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.batchSize,c.outHeight,c.outWidth,c.outChannels]}];let f;if(V().getBool("WEBGPU_USE_NAIVE_CONV2D_TRANSPOSE")||c.dataFormat!=="channelsLast")f=new gl(c);else{f=new vl(c);const m=c.inHeight*c.inWidth,g=c.inChannels,x=c.filterHeight*c.filterWidth*c.outChannels;p.push({type:"uint32",data:[m]},{type:"uint32",data:[g]},{type:"uint32",data:[x]})}return e.runWebGPUProgram(f,[o,r],"float32",p)}const kl={kernelName:vo,backendName:"webgpu",kernelFunc:Il};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rl{constructor(t){this.variableNames=["x","W"],this.uniforms="filterDims: vec3<i32>, pads: vec3<i32>, strides: vec3<i32>, dilations: vec3<i32>,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="conv3dnaive"}getUserCode(){return`
    ${y("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords.x;
        let d2 = coords.u;

        let xFRCCorner = vec3<i32>(coords.y, coords.z, coords.w) * uniforms.strides - uniforms.pads;
        let xFCorner = xFRCCorner.x;
        let xRCorner = xFRCCorner.y;
        let xCCorner = xFRCCorner.z;

        let inputDepthNearestVec4 = (uniforms.xShape.u / 4) * 4;
        let inputDepthVec4Remainder = uniforms.xShape.u % 4;

        var dotProd = 0.0;
        for (var wF = 0; wF < uniforms.filterDims[0]; wF++) {
          let xF = xFCorner + wF * uniforms.dilations[0];
          if (xF < 0 || xF >= uniforms.xShape.y) {
            continue;
          }

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let xR = xRCorner + wR * uniforms.dilations[1];
            if (xR < 0 || xR >= uniforms.xShape.z) {
              continue;
            }

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let xC = xCCorner + wC * uniforms.dilations[2];
              if (xC < 0 || xC >= uniforms.xShape.w) {
                continue;
              }

              for (var d1 = 0; d1 < inputDepthNearestVec4; d1 += 4) {
                let xValues = vec4<f32>(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                let wValues = vec4<f32>(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (inputDepthVec4Remainder == 1) {
                dotProd += getX(batch, xF, xR, xC, inputDepthNearestVec4) *
                  getW(wF, wR, wC, inputDepthNearestVec4, d2);
              } else if (inputDepthVec4Remainder == 2) {
                let xValues = vec2<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1)
                );
                let wValues = vec2<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (inputDepthVec4Remainder == 3) {
                let xValues = vec3<f32>(
                  getX(batch, xF, xR, xC, inputDepthNearestVec4),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                  getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2)
                );
                let wValues = vec3<f32>(
                  getW(wF, wR, wC, inputDepthNearestVec4, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 1, d2),
                  getW(wF, wR, wC, inputDepthNearestVec4 + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }`}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pl(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,filter:r}=t,{strides:a,pad:n,dilations:u}=i,d=Ze(o.shape,r.shape,a,u,n),l=[d.padInfo.front,d.padInfo.top,d.padInfo.left],h=[{type:"int32",data:[d.filterDepth,d.filterHeight,d.filterWidth]},{type:"int32",data:[...l]},{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationDepth,d.dilationHeight,d.dilationWidth]}],c=new Rl(d),p=Se(o.dtype,r.dtype);return e.runWebGPUProgram(c,[o,r],p,h)}const $l={kernelName:Io,backendName:"webgpu",kernelFunc:Pl};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dl(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,dy:r}=t,{strides:a,pad:n,filterShape:u}=i,d=Ze(o.shape,u,a,1,n),l=new Cl(d),h=[{type:"int32",data:[d.padInfo.front,d.padInfo.top,d.padInfo.left]},{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.batchSize]},{type:"int32",data:[d.outDepth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"int32",data:[d.inDepth]},{type:"int32",data:[d.inHeight]},{type:"int32",data:[d.inWidth]}];return e.runWebGPUProgram(l,[o,r],r.dtype,h)}const Nl={kernelName:ko,backendName:"webgpu",kernelFunc:Dl};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zl(s){const{inputs:t,backend:e,attrs:i}=s,{dy:o,filter:r}=t,{strides:a,pad:n,inputShape:u}=i,d=Ze(u,r.shape,a,1,n),l=new wl(d),h=[{type:"int32",data:[d.filterDepth,d.filterHeight,d.filterWidth]},{type:"int32",data:[d.filterDepth-1-d.padInfo.front,d.filterHeight-1-d.padInfo.top,d.filterWidth-1-d.padInfo.left]},{type:"int32",data:[d.strideDepth,d.strideHeight,d.strideWidth]},{type:"int32",data:[d.outDepth]},{type:"int32",data:[d.outHeight]},{type:"int32",data:[d.outWidth]},{type:"int32",data:[d.outChannels]}];return e.runWebGPUProgram(l,[o,r],o.dtype,h)}const Al={kernelName:Ro,backendName:"webgpu",kernelFunc:zl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fl=L({opType:b.COS}),Ll={kernelName:Po,backendName:"webgpu",kernelFunc:Fl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const El=L({opType:b.COSH}),Bl={kernelName:$o,backendName:"webgpu",kernelFunc:El};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class _l{constructor(t,e,i,o){this.variableNames=["Image","Boxes","BoxInd"],this.uniforms="extrapolationValue : f32,",this.workgroupSize=[64,1,1],this.size=!0;const[r]=e;this.outputShape=[r,i[0],i[1],t],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.methodId=o==="bilinear"?1:0,this.cropHeightBiggerThan1=this.outputShape[1]>1,this.cropWidthBiggerThan1=this.outputShape[2]>1,this.shaderKey=`cropAndResize_${this.methodId}_${this.cropHeightBiggerThan1}_${this.cropWidthBiggerThan1}`}getUserCode(){const[t,e]=["f32(uniforms.imageShape[1] - 1)","f32(uniforms.imageShape[2] - 1)"],[i,o,r]=this.cropHeightBiggerThan1?[`(${t} / f32(uniforms.outShape[1] - 1))`,"(y2-y1) * height_ratio",`y1*${t} + f32(y)*(height_scale)`]:["0.0","0.0",`0.5 * (y1+y2) * ${t}`],[a,n,u]=this.cropWidthBiggerThan1?[`(${e} / f32(uniforms.outShape[2] - 1))`,"(x2-x1) * width_ratio",`x1*${e} + f32(x)*(width_scale)`]:["0.0","0.0",`0.5 * (x1+x2) * ${e}`];return`
    ${y("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let height_ratio = f32(${i});
        let width_ratio = f32(${a});
        let b = coords[0];
        let y = coords[1];
        let x = coords[2];
        let d = coords[3];
        // get box vals
        let y1 = getBoxes(b, 0);
        let x1 = getBoxes(b, 1);
        let y2 = getBoxes(b, 2);
        let x2 = getBoxes(b, 3);
        // get image in batch index
        let bInd = i32(round(getBoxInd(b)));
        if(bInd < 0 || bInd >= uniforms.outShape[0]) {
          return;
        }
        let height_scale = ${o};
        let width_scale = ${n};
        let in_y = ${r};
        if( in_y < 0.0 || in_y > ${t} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let in_x = ${u};
        if( in_x < 0.0 || in_x > ${e} ) {
          setOutputAtIndex(index, uniforms.extrapolationValue);
          return;
        }
        let sourceFracIndexCR = vec2<f32>(in_x,in_y);
        if(${this.methodId} == 1) {
          // Compute the four integer indices.
          let sourceFloorCR = vec2<i32>(sourceFracIndexCR);
          let sourceCeilCR = vec2<i32>(ceil(sourceFracIndexCR));
          let topLeft = getImage(bInd, sourceFloorCR.y, sourceFloorCR.x, d);
          let bottomLeft = getImage(bInd, sourceCeilCR.y, sourceFloorCR.x, d);
          let topRight = getImage(bInd, sourceFloorCR.y, sourceCeilCR.x, d);
          let bottomRight = getImage(bInd, sourceCeilCR.y, sourceCeilCR.x, d);
          let fracCR = sourceFracIndexCR - vec2<f32>(sourceFloorCR);
          let top = topLeft + (topRight - topLeft) * fracCR.x;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          let newValue = top + (bottom - top) * fracCR.y;
          setOutputAtIndex(index, newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          let sourceNearestCR = vec2<i32>(floor(
            sourceFracIndexCR + vec2<f32>(0.5,0.5)));
          let newValue = getImage(
            bInd, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutputAtIndex(index, newValue);
        }
      }
    }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wl=s=>{const{inputs:t,backend:e,attrs:i}=s,{image:o,boxes:r,boxInd:a}=t,{cropSize:n,method:u,extrapolationValue:d}=i,l=new _l(o.shape[3],r.shape,n,u),h=[{type:"float32",data:[d]}];return e.runWebGPUProgram(l,[o,r,a],"float32",h)},Tl={kernelName:Do,backendName:"webgpu",kernelFunc:Wl};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ke;(function(s){s.Prod="*",s.Sum="+"})(ke||(ke={}));class vt{constructor(t,e,i,o){this.variableNames=["x"],this.uniforms="index : f32,",this.size=!0,this.workgroupSize=[128,1,1],this.outputShape=e,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.exclusive=i,this.reverse=o,this.op=t,this.shaderKey=`cum_${this.op}_${this.exclusive}_${this.reverse}`}getUserCode(){const t=this.outputShape.length,e=this.op===ke.Prod?"1.0":"0.0",i=this.exclusive?e:`getX(${It(t,"coords",this.op)})`,o=this.outputShape[this.outputShape.length-1];let r="",a="";return this.exclusive?(r=this.reverse?`end != ${o-1}`:"end != 0",a=this.reverse?"end + 1":"end - 1"):(r=this.reverse?`end + pow2 < ${o}`:"end >= pow2",a=this.reverse?"end + pow2":"end - pow2"),`
      ${y("index")} {
       if (index < uniforms.size) {
         var coords = getCoordsFromIndex(index);

         let end = ${kt(t,"coords",this.op)};
         var val = ${i};
         let pow2 = i32(pow(2.0, uniforms.index));
         if (${r}) {
           let idx = ${a};
           ${kt(t,"coords",this.op)} = idx;
           val ${this.op}= getX(${It(t,"coords",this.op)});
         }
         setOutputAtIndex(index, val);
       }
      }
    `}}function It(s,t,e){if(s===1)return`${t}`;if(s===2)return`${t}.x, ${t}.y`;if(s===3)return`${t}.x, ${t}.y, ${t}.z`;if(s===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${e} for rank ${s} is not yet supported`)}function kt(s,t,e){if(s===1)return`${t}`;if(s===2)return`${t}.y`;if(s===3)return`${t}.z`;if(s===4)return`${t}.w`;throw Error(`Cumulative ${e} for rank ${s} is not yet supported`)}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kt(s,t,e,i,o,r){const a=t.shape.length,n=Re([i],a);let u=t;n!=null&&(u=j({inputs:{x:t},backend:e,attrs:{perm:n}}));const d=Pe(1,a)[0];if(d!==a-1)throw new Error(`WebGPU cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${i}`);const l=u.shape[d];let h=K({inputs:{x:u},backend:e});for(let c=0;c<=Math.ceil(Math.log2(l))-1;c++){const p=new vt(s,u.shape,!1,r),f=h,m=[{type:"float32",data:[c]}];h=e.runWebGPUProgram(p,[h],h.dtype,m),e.disposeData(f.dataId)}if(o){const c=new vt(s,u.shape,o,r),p=h,f=[{type:"float32",data:[0]}];h=e.runWebGPUProgram(c,[h],h.dtype,f),e.disposeData(p.dataId)}if(n!=null){const c=Ft(n),p=j({inputs:{x:h},backend:e,attrs:{perm:c}});return e.disposeData(h.dataId),e.disposeData(u.dataId),p}return h}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vl(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{axis:r,exclusive:a,reverse:n}=i;return Kt(ke.Prod,o,e,r,a,n)}const Ul={kernelName:No,backendName:"webgpu",kernelFunc:Vl};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ml(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{axis:r,exclusive:a,reverse:n}=i;return Kt(ke.Sum,o,e,r,a,n)}const Ol={kernelName:zo,backendName:"webgpu",kernelFunc:Ml};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gl(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,weights:r}=t,{size:a,binaryOutput:n}=i,u=o.shape.length===1,l=N(r.shape)>0,h=r.dtype,c=u?[o.shape[0]]:[o.shape[0],o.shape[1]],p=u?[a]:[o.shape[0],a],f=X({backend:e,attrs:{shape:p,value:0,dtype:h}}),m=new Ot(c,l,n),g=[{type:"int32",data:[a]}],x=l?[o,r]:[o];return e.runWebGPUProgram(m,x,h,g,f)}const Hl={kernelName:Ao,backendName:"webgpu",kernelFunc:Gl};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xl{constructor(t,e){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.uniforms="blockSize : i32,",this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`depthToSpace_${e}`,this.dataFormat=e}getUserCode(){return`
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let h = ${this.getHeightCoordString()};
          let w = ${this.getWidthCoordString()};
          let d = ${this.getDepthCoordString()};

          let in_h = h / uniforms.blockSize;
          let offset_h = h % uniforms.blockSize;
          let in_w = w / uniforms.blockSize;
          let offset_w = w % uniforms.blockSize;
          let offset_d = (offset_h * uniforms.blockSize + offset_w) *
            ${this.getOutputDepthSize()};
          let in_d = d + offset_d;

          let rlt = ${this.getInputSamplingString()};
          setOutputAtIndex(index, rlt);
        }
      }`}getHeightCoordString(){return this.dataFormat==="NHWC"?"coords[1]":"coords[2]"}getWidthCoordString(){return this.dataFormat==="NHWC"?"coords[2]":"coords[3]"}getDepthCoordString(){return this.dataFormat==="NHWC"?"coords[3]":"coords[1]"}getOutputDepthSize(){return this.dataFormat==="NHWC"?"uniforms.outShape[3]":"uniforms.outShape[1]"}getInputSamplingString(){return this.dataFormat==="NHWC"?"getX(b, in_h, in_w, in_d)":"getX(b, in_d, in_h, in_w)"}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kl(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{blockSize:r,dataFormat:a}=i,n=o.shape[0],u=a==="NHWC"?o.shape[1]:o.shape[2],d=a==="NHWC"?o.shape[2]:o.shape[3],l=a==="NHWC"?o.shape[3]:o.shape[1],h=u*r,c=d*r,p=l/(r*r),f=a==="NHWC"?[n,h,c,p]:[n,p,h,c],m=[{type:"int32",data:[r]}],g=new Xl(f,a);return e.runWebGPUProgram(g,[o],o.dtype,m)}const ql={kernelName:Fo,backendName:"webgpu",kernelFunc:Kl};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yl{constructor(t,e,i,o=!1,r=null,a=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>,",this.workgroupSize=[16,16,1],this.outputShape=t,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),o&&this.variableNames.push("bias"),a&&this.variableNames.push("preluActivationWeights"),this.addBias=o,this.activation=r,this.hasPreluActivation=a,this.filterHeight=e,this.filterWidth=i,this.shaderKey=`depthwiseNCHW_${this.activation}_${this.filterHeight}_${this.filterWidth}`}getUserCode(){const t=this.filterWidth*this.filterHeight,e=this.workgroupSize[0]*this.workgroupSize[1]*this.workgroupSize[2],i=this.workgroupSize[1]+this.filterHeight-1,o=this.workgroupSize[0]+this.filterWidth-1;return`
      ${Z(this.activation,this.hasPreluActivation,!1,4)}

      var<workgroup> mm_Asub : array<array<f32, ${o}>, ${i}>;
      var<workgroup> mm_Bsub : array<array<f32, ${this.filterWidth}>, ${this.filterHeight}>;
      fn readX(batch : i32, channel : i32, row : i32, col : i32) -> f32 {
        var value = 0.0;
        if (row >=0 && row < uniforms.inDims[0] && col >=0 && col < uniforms.inDims[1])
        {
          value = getX(batch, channel, row, col);
        }
        return value;
      }

      ${y()} {
        let coords = getOutputCoords();
        let batch = coords[0];
        let xRCCorner = vec2<i32>(coords.zw) - uniforms.pads;
        let channelMul = uniforms.wShape[3];
        let d1 = coords[1] / channelMul;
        let q = coords[1] % channelMul;

        let inputRowStart = xRCCorner.x;
        let inputColStart = xRCCorner.y;

        let localRow = i32(localId.y);
        let localCol = i32(localId.x);

        // Load one tile of X into local memory.
        for (var inputRow = localRow; inputRow < ${i}; inputRow = inputRow + ${this.workgroupSize[1]}) {
          for (var inputCol = localCol; inputCol < ${o}; inputCol = inputCol + ${this.workgroupSize[0]}) {
            let rowOffset = inputRow - localRow;
            let colOffset = inputCol - localCol;
            mm_Asub[inputRow][inputCol] = readX(batch, d1, inputRowStart + rowOffset, inputColStart + colOffset);
          }
        }

        // Load one tile of W into local memory.
        var wIndex = i32(localIndex);
        ${t<e?`if (wIndex < ${t})`:`for(; wIndex < ${t}; wIndex = wIndex + ${e})`}

        {
          let wRow = wIndex / ${this.filterWidth};
          let wCol = wIndex % ${this.filterWidth};
          mm_Bsub[wRow][wCol] = getW(wRow, wCol, d1, q);
        }

        workgroupBarrier();

        var value = 0.0;
        for (var wR = 0; wR < ${this.filterHeight}; wR = wR + 1) {
          for (var wC = 0; wC < ${this.filterWidth}; wC = wC + 1) {
            let xVal = mm_Asub[localRow + wR][localCol + wC];
            let wVal = mm_Bsub[wR][wC];
            value = fma(xVal, wVal, value);
          }
        }
        ${ae(this.addBias,this.activation)}
        if (coordsInBounds4D(coords, uniforms.outShape)) {
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qt{constructor(t,e=!1,i=null,o=!1){this.variableNames=["x","W"],this.uniforms="pads : vec2<i32>, inDims : vec2<i32>, virtualWidth : i32,",this.workgroupSize=[64,1,1],this.workPerThread=4,this.outputComponent=4,this.outputShape=t.outShape,this.virtualWidth=Math.ceil(this.outputShape[2]/this.workPerThread)*this.workPerThread;const r=[this.outputShape[0],this.outputShape[1],this.virtualWidth,this.outputShape[3]];this.dispatchLayout=I(r),this.dispatch=S(this.dispatchLayout,r,this.workgroupSize,[this.outputComponent*this.workPerThread,1,1]),E(t.dataFormat==="channelsLast",()=>"TODO: NCHW is unimplemented"),e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.convInfo=t,this.addBias=e,this.activation=i,this.hasPreluActivation=o,this.shaderKey=`depthwiseVec4_${i}_${this.convInfo.filterHeight}_${this.convInfo.filterWidth}_${this.convInfo.strideHeight}_${this.convInfo.strideWidth}_${this.workPerThread}`}getUserCode(){const t=(this.workPerThread-1)*this.convInfo.strideWidth+this.convInfo.filterWidth,e=this.convInfo.strideHeight,i=this.convInfo.strideWidth;return`
      ${Z(this.activation,this.hasPreluActivation,!0,4)}
      fn readX(batch : i32, row : i32, col : i32, channel : i32) -> vec4<f32> {
        var value = vec4<f32>(0.0);
        if (col >=0 && col < uniforms.inDims[1]) {
          value = getX(batch, row, col, channel);
        }
        return value;
      }

      ${y("index")} {
        let width0 = uniforms.outShape[3] / ${this.outputComponent};
        let d1 = (index % width0) * ${this.outputComponent};
        var index1 = index / width0;
        let width1 = uniforms.virtualWidth / ${this.workPerThread};
        let c = (index1 % width1) * ${this.workPerThread};
        index1 = index1 / width1;
        let r = index1 % uniforms.outShape[1];
        let batch = index1 / uniforms.outShape[1];

        let xRCCorner = vec2<i32>(r, c) * vec2<i32>(${e}, ${i}) - uniforms.pads;

        let xRCorner = xRCCorner.x;
        let xCCorner = xRCCorner.y;
        var xVals : array<vec4<f32>, ${t}>;
        var dotProd : array<vec4<f32>, ${this.workPerThread}>;
        for (var i = 0; i < ${this.workPerThread}; i++) {
          dotProd[i] = vec4<f32>(0.0);
        }

        // Use constant instead of uniform can give better performance.
        for (var wR = 0; wR < ${this.convInfo.filterHeight}; wR = wR + 1) {
          let xR = xRCorner + wR;
          if (xR >=0 && xR < uniforms.inDims[0]) {
            for (var i = 0; i < ${t}; i++) {
              xVals[i] = readX(batch, xR, xCCorner + i, d1);
            }
            for (var wC = 0; wC < ${this.convInfo.filterWidth}; wC = wC + 1) {
              let wValue = getW(wR, wC, d1, 0);
              for (var i = 0; i < ${this.workPerThread}; i++) {
                dotProd[i] = fma(xVals[i * ${i} + wC], wValue, dotProd[i]);
              }
            }
          }
        }

        for (var i = 0; i < ${this.workPerThread}; i = i + 1) {
          let coords = vec4<i32>(batch, r, c + i, d1);
          if (coordsInBounds4D(coords, uniforms.outShape)) {
            var value = dotProd[i];
            ${ae(this.addBias,this.activation)}
            setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yt{constructor(t,e=!1,i=null,o=!1){this.variableNames=["x","W"],this.uniforms=`pads : vec2<i32>, inDims : vec2<i32>, filterHeight : i32,
      filterWidth : i32, strides : vec2<i32>, dilations : vec2<i32>,`,this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.isChannelsLast=t.dataFormat==="channelsLast",e&&this.variableNames.push("bias"),o&&this.variableNames.push("preluActivationWeights"),this.convInfo=t,this.addBias=e,this.activation=i,this.hasPreluActivation=o,this.shaderKey=`depthwise_${this.activation}_${this.isChannelsLast}`}getUserCode(){const t=this.isChannelsLast?"getX(batch, xR, xC, d1);":"getX(batch, d1, xR, xC);";return`
      ${Z(this.activation,this.hasPreluActivation,!1,4)}

      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let batch = coords[0];
          let xRCCorner = vec2<i32>(coords.${this.isChannelsLast?"yz":"zw"}) * uniforms.strides - uniforms.pads;
          let d2 = coords[${this.isChannelsLast?3:1}];
          let channelMul = uniforms.wShape[3];
          let d1 = d2 / channelMul;
          let q = d2 % channelMul;

          let inputRowStart = xRCCorner.x;
          let inputColStart = xRCCorner.y;
          let inputRowEnd = inputRowStart + uniforms.filterHeight *
              uniforms.dilations[0];
          let inputColEnd = inputColStart + uniforms.filterWidth *
              uniforms.dilations[1];

          // Convolve x(?, ?, d1)|x(d1, ?, ?) with w(:, :, d1, q) to get
          // y(yR, yC, d2)|y(d2, yR, yC). ? = to be determined. : = across all
          // values in that axis. x(?, ?, d1) and y(yR, yC, d2) is for NHWC.
          // x(d1, ?, ?) and y(d2, yR, yC) is for NCHW.
          var value = 0.0;

          // Extract if checking out of for loop for performance.
          if (inputRowStart >= 0 && inputColStart >= 0 &&
            inputRowEnd < uniforms.inDims[0] &&
                inputColEnd < uniforms.inDims[1]) {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  let xVal = ${t};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            } else {
              for (var wR = 0; wR < uniforms.filterHeight; wR = wR + 1) {
                let xR = inputRowStart + wR * uniforms.dilations[0];

                if (xR < 0 || xR >= uniforms.inDims[0]) {
                  continue;
                }

                for (var wC = 0; wC < uniforms.filterWidth; wC = wC + 1) {
                  let xC = inputColStart + wC * uniforms.dilations[1];

                  if (xC < 0 || xC >= uniforms.inDims[1]) {
                    continue;
                  }

                  let xVal = ${t};
                  let wVal = getW(wR, wC, d1, q);
                  value = value + xVal * wVal;
                }
              }
            }
            ${ae(this.addBias,this.activation)}
          setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jl(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,filter:r}=t,{strides:a,pad:n,dataFormat:u,dilations:d,dimRoundingMode:l}=i,h=De(u);let c=d;c==null&&(c=[1,1]);const p=ee(o.shape,r.shape,a,c,n,l,!0,h),f=[{type:"int32",data:[p.padInfo.top,p.padInfo.left]},{type:"int32",data:[p.inHeight,p.inWidth]}],m=p.dataFormat==="channelsLast";let g;return!m&&p.inHeight>16&&p.inWidth>16&&p.strideHeight===1&&p.strideWidth===1&&p.dilationWidth===1&&p.dilationHeight===1&&p.inChannels===p.outChannels?g=new Yl(p.outShape,p.filterHeight,p.filterWidth):m&&p.outHeight>4&&p.outWidth>4&&p.strideWidth<=2&&p.inChannels===p.outChannels&&p.dilationHeight===1&&p.dilationWidth===1&&p.inChannels%4===0?(g=new qt(p),f.push({type:"int32",data:[g.virtualWidth]})):(g=new Yt(p),f.push({type:"int32",data:[p.filterHeight]},{type:"int32",data:[p.filterWidth]},{type:"int32",data:[p.strideHeight,p.strideWidth]},{type:"int32",data:[p.dilationHeight,p.dilationWidth]})),e.runWebGPUProgram(g,[o,r],o.dtype,f)}const Ql={kernelName:Lo,backendName:"webgpu",kernelFunc:jl};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Zl{constructor(t){this.variableNames=["x","dy"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>, outHeight : i32,
      outWidth : i32, inHeight : i32, inWidth : i32, batchSize : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.filterShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_filter"}getUserCode(){return`
      ${y("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let wR = coords[0];
        let wC = coords[1];
        let d1 = coords[2];
        let dm = coords[3];
        let d2 = d1 * uniforms.channelMul + dm;

        var dotProd = 0.0;
        for (var b = 0; b < uniforms.batchSize; b++) {
          for (var yR = 0; yR < uniforms.outHeight; yR++) {
            let xR = wR + yR * uniforms.strides[0] - uniforms.pads[0];

            if (xR < 0 || xR >= uniforms.inHeight) {
              continue;
            }

            for (var yC = 0; yC < uniforms.outWidth; yC++) {
              let xC = wC + yC * uniforms.strides[1] - uniforms.pads[1];

              if (xC < 0 || xC >= uniforms.inWidth) {
                continue;
              }

              let dyValue = getDy(b, yR, yC, d2);
              let xValue = getX(b, xR, xC, d1);
              dotProd += xValue * dyValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class Jl{constructor(t){this.variableNames=["dy","W"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32, channelMul : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="depthwise_conv2d_backprop_input"}getUserCode(){return`
      ${y("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d1 = coords[3];
        let dyCorner = coords.yz - uniforms.pads;
        let dyRCorner = dyCorner.x;
        let dyCCorner = dyCorner.y;

        var dotProd = 0.0;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }

          let idyR = i32(dyR);
          let wRPerm = uniforms.filterDims[0] - 1 - wR;

          for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }

            let idyC = i32(dyC);
            let wCPerm = uniforms.filterDims[1] - 1 - wC;

            for (var dm = 0; dm < uniforms.channelMul; dm++) {
              let d2 = d1 * uniforms.channelMul + dm;
              let xValue = getDy(batch, idyR, idyC, d2);
              let wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ec(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,dy:r}=t,{strides:a,dilations:n,pad:u,dimRoundingMode:d,filterShape:l}=i,h=ee(o.shape,l,a,n,u,d,!0),c=new Zl(h),p=[{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"int32",data:[h.inHeight]},{type:"int32",data:[h.inWidth]},{type:"int32",data:[h.batchSize]},{type:"int32",data:[h.outChannels/h.inChannels]}];return e.runWebGPUProgram(c,[o,r],"float32",p)}const tc={kernelName:Eo,backendName:"webgpu",kernelFunc:ec};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sc(s){const{inputs:t,backend:e,attrs:i}=s,{dy:o,filter:r}=t,{strides:a,dilations:n,pad:u,dimRoundingMode:d,inputShape:l}=i,h=ee(l,r.shape,a,n,u,d,!0),c=new Jl(h),p=[{type:"int32",data:[h.strideHeight,h.strideWidth]},{type:"int32",data:[h.filterHeight-1-h.padInfo.top,h.filterWidth-1-h.padInfo.left]},{type:"int32",data:[h.filterHeight,h.filterWidth]},{type:"int32",data:[h.outHeight]},{type:"int32",data:[h.outWidth]},{type:"int32",data:[h.outChannels/h.inChannels]}];return e.runWebGPUProgram(c,[o,r],o.dtype,p)}const oc={kernelName:Bo,backendName:"webgpu",kernelFunc:sc};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ic{constructor(t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,t],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="diag"}getUserCode(){return`
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let value = select(0.0, getX(coords[0]), coords[0] == coords[1]);
          setOutputAtIndex(index, value);
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rc(s){const{inputs:t,backend:e}=s,{x:i}=t,o=[...i.shape,...i.shape],r=N(i.shape),a=R({inputs:{x:i},backend:e,attrs:{shape:[r]}}),n=new ic(r),u=e.runWebGPUProgram(n,[a],a.dtype),d=R({inputs:{x:u},backend:e,attrs:{shape:o}});return e.disposeData(a.dataId),e.disposeData(u.dataId),d}const ac={kernelName:_o,backendName:"webgpu",kernelFunc:rc};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nc{constructor(t){this.variableNames=["x","w"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.outShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="dilation2d"}getUserCode(){return`
       ${y("index")} {
         if (index < uniforms.size) {
           let neg_infinity = -3.4e38;
           let coords = getOutputCoords();
           let batch = coords.x;
           let d1 = coords.w;
           let outTopLeftCorner = coords.yz * uniforms.strides - uniforms.pads;
           let hBeg = outTopLeftCorner.x;
           let wBeg = outTopLeftCorner.y;

           var curVal = neg_infinity;
           for (var h = 0; h < uniforms.filterDims[0]; h = h + 1) {
             let hIn = hBeg + h * uniforms.dilations[0];

             if (hIn >= 0 && hIn < uniforms.xShape[1]) {
               for (var w = 0; w < uniforms.filterDims[1]; w = w + 1) {
                 let wIn = wBeg + w * uniforms.dilations[1];

                 if (wIn >= 0 && wIn < uniforms.xShape[2]) {
                   let val = getX(batch, hIn, wIn, d1) + getW(h, w, d1);
                   if (val > curVal) {
                     curVal = val;
                   }
                 }
               }
             }
           }

           setOutputAtIndex(index, curVal);
         }
       }
     `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uc(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,filter:r}=t,{strides:a,pad:n,dilations:u}=i,d=Je(o.shape,r.shape,a,n,"NHWC",u),l=[d.padInfo.top,d.padInfo.left],h=[{type:"int32",data:[d.filterHeight,d.filterWidth]},{type:"int32",data:[...l]},{type:"int32",data:[d.strideHeight,d.strideWidth]},{type:"int32",data:[d.dilationHeight,d.dilationWidth]}],c=new nc(d);return e.runWebGPUProgram(c,[o,r],o.dtype,h)}const dc={kernelName:Wo,backendName:"webgpu",kernelFunc:uc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class lc{constructor(t,e){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t.inShape,this.dispatchLayout=I(t.outShape),this.dispatch=S(this.dispatchLayout,t.outShape,this.workgroupSize),e!=="float32"&&e!=="int32")throw new Error(`Dilation2DBackpropInput only supports float32 and int32
          types, does not support ${e} type.`);this.type=e,this.shaderKey="dilation2DBackpropInput"}getUserCode(){return`
       ${y("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var xRMax = 0;
           var xCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     xRMax = xR;
                     xCMax = xC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.xShape[3] *
               (xCMax + uniforms.xShape[2] * (xRMax + uniforms.xShape[1] * b));
           let value = getDy(b, r, c, d);
           ${te("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}class cc{constructor(t,e,i){if(this.variableNames=["x","w","dy"],this.uniforms="filterDims: vec2<i32>, pads: vec2<i32>, strides: vec2<i32>, dilations: vec2<i32>, dySize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t.filterShape,this.dispatchLayout=I(t.outShape),this.dispatch=S(this.dispatchLayout,t.outShape,this.workgroupSize),i!=="float32"&&i!=="int32")throw new Error(`Dilation2DBackpropFilter only supports float32 and int32
          types, does not support ${i} type.`);this.type=i,this.shaderKey="dilation2DBackpropFilter"}getUserCode(){return`
       ${y("index")} {
         if (index < uniforms.dySize) {
           let coords = getDyCoordsFromIndex(index);
           let b = coords[0];
           let r = coords[1];
           let c = coords[2];
           let d = coords[3];

           let dyCorner = vec2<i32>(r, c) * uniforms.strides - uniforms.pads;
           var curVal = -3.4e38;  // neg_infinity
           var wRMax = 0;
           var wCMax = 0;

           // In the case of multiple argmax branches, we only back-propagate
           // along the last branch, i.e., the one with largest value of
           // 'wR * uniforms.filterDims[1] + wC', similarly to the max-pooling
           // backward routines.
           for (var wR = 0; wR < uniforms.filterDims[0]; wR++) {
             let xR = dyCorner.x + wR * uniforms.dilations[0];

             if (xR >= 0 && xR < uniforms.xShape[1]) {
               for (var wC = 0; wC < uniforms.filterDims[1]; wC++) {
                 let xC = dyCorner.y + wC * uniforms.dilations[1];

                 if (xC >= 0 && xC < uniforms.xShape[2]) {
                   let val = getX(b, xR, xC, d) + getW(wR, wC, d);
                   if (val > curVal) {
                     curVal = val;
                     wRMax = wR;
                     wCMax = wC;
                   }
                 }
               }
             }
           }

           let flatIndexIn = d + uniforms.wShape[2] * (wCMax + wRMax * uniforms.wShape[1]);
           let value = getDy(b, r, c, d);
           ${te("&result[flatIndexIn]","value",this.type)}
         }
       }
     `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function hc(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,filter:r,dy:a}=t,{strides:n,pad:u,dilations:d}=i,l=Je(o.shape,r.shape,n,u,"NHWC",d),h=r.dtype,c=new cc(l,r.shape,h),p=[{type:"int32",data:[l.filterHeight,l.filterWidth]},{type:"int32",data:[l.padInfo.top,l.padInfo.left]},{type:"int32",data:[l.strideHeight,l.strideWidth]},{type:"int32",data:[l.dilationHeight,l.dilationWidth]},{type:"int32",data:[N(l.outShape)]}],f=X({backend:e,attrs:{shape:r.shape,value:0,dtype:h}});return e.runWebGPUProgram(c,[o,r,a],h,p,f)}const pc={kernelName:To,backendName:"webgpu",kernelFunc:hc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fc(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,filter:r,dy:a}=t,{strides:n,pad:u,dilations:d}=i,l=Je(o.shape,r.shape,n,u,"NHWC",d),h=o.dtype,c=new lc(l,h),p=[{type:"int32",data:[l.filterHeight,l.filterWidth]},{type:"int32",data:[l.padInfo.top,l.padInfo.left]},{type:"int32",data:[l.strideHeight,l.strideWidth]},{type:"int32",data:[l.dilationHeight,l.dilationWidth]},{type:"int32",data:[N(l.outShape)]}],f=X({backend:e,attrs:{shape:l.inShape,value:0,dtype:h}});return e.runWebGPUProgram(c,[o,r,a],h,p,f)}const mc={kernelName:Vo,backendName:"webgpu",kernelFunc:fc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class gc{constructor(t,e,i){this.variableNames=["Image"],this.uniforms="alpha: f32,",this.workgroupSize=[64,1,1],this.pixelsOpType=pe.DRAW,this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.type=e,this.textureFormat=i,this.shaderKey=`draw_${e}_${i}`}getUserCode(){let t;const e=this.type==="float32"?"value":"value / 255.0";return t=`
      if (uniforms.numChannels == 1) {
        rgba[0] = ${e};
        rgba[1] = ${e};
        rgba[2] = ${e};
      } else {
        rgba[d] = ${e};
      }`,`
       @group(0) @binding(0) var outImage : texture_storage_2d<${this.textureFormat}, write>;
       ${y("index")} {
         if (index < uniforms.size) {
           var rgba = vec4<f32>(0.0, 0.0, 0.0, uniforms.alpha);
           for (var d = 0; d < uniforms.numChannels; d = d + 1) {
             let value = f32(inBuf[index * uniforms.numChannels + d]);
             ${t}
           }
           rgba.x = rgba.x * rgba.w;
           rgba.y = rgba.y * rgba.w;
           rgba.z = rgba.z * rgba.w;
           let coords = getCoordsFromIndex(index);
           textureStore(outImage, vec2<i32>(coords.yx), rgba);
         }
       }
      `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xc(s){const{inputs:t,backend:e,attrs:i}=s,{image:o}=t,{canvas:r,options:a}=i,[n,u]=o.shape.slice(0,2),{imageOptions:d}=a||{},l=(d==null?void 0:d.alpha)||1,h=e.device.features.has("bgra8unorm-storage")?"bgra8unorm":"rgba8unorm",c=[n,u],p=new gc(c,o.dtype,h);r.width=u,r.height=n;const f="webgpu";let m=r.getContext(f),g;m||(g=new OffscreenCanvas(u,n),m=g.getContext(f));const x=o.shape.length===3?o.shape[2]:1;m.configure({device:e.device,format:h,usage:GPUTextureUsage.STORAGE_BINDING,alphaMode:"premultiplied"});const C="int32",w=e.makeTensorInfo(c,C),v=e.tensorMap.get(w.dataId);v.resource=m.getCurrentTexture(),v.external=!0;const k=[{type:"uint32",data:[x]},{type:"float32",data:[l]}];if(e.runWebGPUProgram(p,[o],C,k,w),g){const P=r.getContext("2d");if(!P)throw new Error("Please make sure this canvas has only been used for 2d or webgpu context!");P.drawImage(g,0,0)}return e.disposeData(w.dataId),o}const Cc={kernelName:Uo,backendName:"webgpu",kernelFunc:xc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const jt=U({opType:$.MUL,cpuKernelImpl:vu,supportsComplex:!0}),wc={kernelName:Mo,backendName:"webgpu",kernelFunc:jt};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qt(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{axis:r,keepDims:a}=i;return ue(o,r,a,"sum",e)}const bc={kernelName:Oo,backendName:"webgpu",kernelFunc:Qt};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yc(s){const{inputs:t,backend:e,attrs:i}=s,{equation:o}=i,r=t,{allDims:a,summedDims:n,idDims:u}=Ho(o,r.length);Xo(a.length,u,r);const{path:d,steps:l}=Ko(n,u),h=l.length;let c=null,p=a.length;const f=[];for(let m=0;m<h;++m){for(const g of l[m]){const{permutationIndices:x,expandDims:C}=qo(p,u[g]);let w;Yo(x)?w=r[g]:(w=j({inputs:{x:r[g]},backend:e,attrs:{perm:x}}),f.push(w));const v=w.shape.slice();for(let k=0;k<C.length;++k)v.splice(C[k],0,1);fe(w.shape,v)||(w=R({inputs:{x:w},backend:e,attrs:{shape:v}}),f.push(w)),c===null?c=w:(c=jt({inputs:{a:w,b:c},backend:e}),f.push(c))}m<h-1&&(d[m]>=0&&(c=Qt({inputs:{x:c},backend:e,attrs:{axis:d[m]-(a.length-p),keepDims:!1}}),f.push(c)),p--)}for(const m of f)m!==c&&e.disposeData(m.dataId);return c}const Sc={kernelName:Go,backendName:"webgpu",kernelFunc:yc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vc=L({opType:b.ELU}),Ic={kernelName:jo,backendName:"webgpu",kernelFunc:vc};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kc=s=>{const{inputs:t,backend:e}=s,{dy:i,y:o}=t,r=new Fe($.ELU_DER,i.shape,o.shape);return e.runWebGPUProgram(r,[i,o],i.dtype)},Rc={kernelName:Qo,backendName:"webgpu",kernelFunc:kc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pc=U({opType:$.EQUAL,dtype:"bool",cpuKernelImpl:uu}),$c={kernelName:Zo,backendName:"webgpu",kernelFunc:Pc};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Dc=L({opType:b.ERF}),Nc={kernelName:Jo,backendName:"webgpu",kernelFunc:Dc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zc=L({opType:b.EXP,cpuKernelImpl:du,dtype:"float32"}),Ac={kernelName:ei,backendName:"webgpu",kernelFunc:zc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qe(s){const{inputs:t,attrs:e,backend:i}=s,{dim:o}=e,{input:r}=t,a=r.shape.length,n=r.shape.slice();let u=o;return o<0&&(E(-(a+1)<=o,()=>`Axis must be in the interval [${-(a+1)}, ${a}]`),u=a+o+1),n.splice(u,0,1),R({inputs:{x:r},backend:i,attrs:{shape:n}})}const Fc={kernelName:ti,backendName:"webgpu",kernelFunc:qe};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lc=L({opType:b.EXPM1,cpuKernelImpl:lu}),Ec={kernelName:si,backendName:"webgpu",kernelFunc:Lc};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Rt{constructor(t,e){this.variableNames=["real","imag"],this.outputShape=[],this.uniforms="exponentMultiplier : f32, denominator: f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.component=t,this.shaderKey=`fft_${t}`}getUserCode(){return`
    fn unaryOpComplex(real: f32, expR: f32, imag: f32, expI: f32) -> f32 {
      ${this.component==="real"?"return real * expR - imag * expI;":"return real * expI + imag * expR;"}
    }

    fn mulMatDFT(batch: i32, index: i32) -> f32 {
      let indexRatio = f32(index) / f32(uniforms.realShape[1]);
      let exponentMultiplierTimesIndexRatio =
          uniforms.exponentMultiplier * indexRatio;

      var result = 0.0;

      for (var i = 0; i < uniforms.realShape[1]; i = i + 1) {
        // x = (-2|2 * PI / N) * index * i;
        let x = exponentMultiplierTimesIndexRatio * f32(i);
        let expR = cos(x);
        let expI = sin(x);
        let real = getReal(batch, i);
        let imag = getImag(batch, i);

        result = result +
            unaryOpComplex(real, expR, imag, expI) / uniforms.denominator;
      }

      return result;
    }

    ${y("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        setOutputAtIndex(index, mulMatDFT(coords[0], coords[1]));
      }
    }
  `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zt(s,t,e){const i=e.tensorMap.get(s.dataId),o=N(s.shape),r=s.shape[s.shape.length-1],a=o/r,n=[],u=R({inputs:{x:s},backend:e,attrs:{shape:[a,r]}});n.push(u);const d=u.shape,l=new Rt("real",d),h=new Rt("imag",d),c=[{dataId:i.complexTensorInfos.real.dataId,dtype:i.complexTensorInfos.real.dtype,shape:d},{dataId:i.complexTensorInfos.imag.dataId,dtype:i.complexTensorInfos.imag.dtype,shape:d}],p=t?2*Math.PI:-2*Math.PI,f=t?d[1]:1,m=[{type:"float32",data:[p]},{type:"float32",data:[f]}],g=e.runWebGPUProgram(l,c,"float32",m);n.push(g);const x=e.runWebGPUProgram(h,c,"float32",m);n.push(x);const C=ne({inputs:{real:g,imag:x},backend:e});n.push(C);const w=R({inputs:{x:C},backend:e,attrs:{shape:s.shape}});return n.forEach(v=>e.disposeData(v.dataId)),w}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bc(s){const{inputs:t,backend:e}=s,{input:i}=t;return Zt(i,!1,e)}const _c={kernelName:oi,backendName:"webgpu",kernelFunc:Bc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Wc{constructor(t){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="flipLeftRight"}getUserCode(){return`
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let coordX = uniforms.xShape[2] - coords[2] - 1;
          let outputValue = getX(coords[0], coords[1], coordX, coords[3]);
          setOutputAtIndex(index, outputValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tc={kernelName:ii,backendName:"webgpu",kernelFunc:({inputs:s,backend:t})=>{const{image:e}=s,i=t,o=new Wc(e.shape);return i.runWebGPUProgram(o,[e],e.dtype)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vc=L({opType:b.FLOOR,cpuKernelImpl:cu}),Uc={kernelName:ri,backendName:"webgpu",kernelFunc:Vc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mc=U({opType:$.FLOOR_DIV,cpuKernelImpl:hu,dtype:"int32"}),Oc={kernelName:ai,backendName:"webgpu",kernelFunc:Mc};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Gc{constructor(t,e,i=!1){this.pixelsOpType=pe.FROM_PIXELS,this.outputShape=[0],this.variableNames=[],this.workgroupSize=[256,1,1],this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[e,1,1]),this.importVideo=i,this.shaderKey=`fromPixels_${this.importVideo}`}getUserCode(){const t=this.importVideo?"textureLoad(src, vec2<i32>(coords.yx));":"textureLoad(src, vec2<i32>(coords.yx), 0)";return`
      @binding(1) @group(0) var src: ${this.importVideo?"texture_external":"texture_2d<f32>"};
      ${y("index")} {
        let flatIndex = index * uniforms.numChannels;
        if (flatIndex < uniforms.size) {
          let coords = getCoordsFromIndex(flatIndex);
          let values = ${t};
          for (var i = 0; i < uniforms.numChannels; i = i + 1) {
            result[flatIndex + i] = i32(floor(255.0 * values[i]));
          }
        }
      }
  `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use backend file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Hc={kernelName:ni,backendName:"webgpu",kernelFunc:Xc};let le,Ge=V().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");function Xc(s){const{inputs:t,backend:e,attrs:i}=s;let{pixels:o}=t;const{numChannels:r}=i;if(o==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");const a=typeof HTMLVideoElement<"u"&&o instanceof HTMLVideoElement,n=typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement,u=typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&o instanceof OffscreenCanvas,d=typeof ImageBitmap<"u"&&o instanceof ImageBitmap,[l,h]=a?[o.videoWidth,o.videoHeight]:[o.width,o.height],c=[h,l,r],p=V().getBool("WEBGPU_IMPORT_EXTERNAL_TEXTURE")&&a,f=a||n;if(d||u||f){let C;if(p)C=e.device.importExternalTexture({source:o});else{if(f){const O=V().getBool("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU");(le==null||O!==Ge)&&(Ge=O,le=document.createElement("canvas").getContext("2d",{willReadFrequently:Ge})),le.canvas.width=l,le.canvas.height=h,le.drawImage(o,0,0,l,h),o=le.canvas}const _=GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.TEXTURE_BINDING,H=e.textureManager.acquireTexture(c[1],c[0],"rgba8unorm",_);e.queue.copyExternalImageToTexture({source:o},{texture:H},[c[1],c[0]]),C=H}const w=N(c),v=ye(c),k=new Gc(c,r,p),P=[{type:"uint32",data:[w]},{type:"uint32",data:[r]},{type:"uint32",data:[...v]}],D=e.makeTensorInfo([h,l],"int32"),F=e.tensorMap.get(D.dataId);F.resource=C;const A=e.runWebGPUProgram(k,[D],"int32",P);return e.disposeData(D.dataId),A}const m=o.data;let g=m;if(r!=null&&r!==4){g=new Uint8Array(o.width*o.height*r);const C=m.length;let w=0;for(let v=0;v<C;v++)v%4<r&&(g[w++]=m[v])}const x=e.makeTensorInfo(c,"int32",new Int32Array(g));return e.uploadToGPU(x.dataId),x}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Kc{constructor(t,e,i,o,r){this.uniforms="varianceEpsilon : f32,",this.workgroupSize=[128,1,1],this.size=!0,this.variableNames=["x","mean","variance"],J(t,e),J(t,i),this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),o!=null&&(J(t,o),this.variableNames.push("offset")),r!=null&&(J(t,r),this.variableNames.push("scale")),this.offsetShape=o,this.scaleShape=r,this.shaderKey="batchNorm"}getUserCode(){let t="0.0";this.offsetShape!=null&&(t="getOffsetByOutputIndex(index)");let e="1.0";return this.scaleShape!=null&&(e="getScaleByOutputIndex(index)"),`
      ${y("index")} {
        if (index < uniforms.size)
        {
          let xValue = getXByOutputIndex(index);
          let meanValue = getMeanByOutputIndex(index);
          let varianValue = getVarianceByOutputIndex(index);
          let offsetValue = ${t};
          let scaleValue = ${e};
          let inv = scaleValue * inverseSqrt(varianValue + f32(uniforms.varianceEpsilon));
          setOutputAtIndex(index,dot(vec3<f32>(xValue, -meanValue, offsetValue), vec3<f32>(inv, inv, 1.0)));
        }
      }
  `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const qc={kernelName:ui,backendName:"webgpu",kernelFunc:({inputs:s,attrs:t,backend:e})=>{const{x:i,scale:o,offset:r,mean:a,variance:n}=s,{varianceEpsilon:u}=t,d=e,l=[i,a,n];let h=null;r!=null&&(h=r.shape,l.push(r));let c=null;o!=null&&(c=o.shape,l.push(o));const p=new Kc(i.shape,a.shape,n.shape,h,c),f=[{type:"float32",data:[u]}];return d.runWebGPUProgram(p,l,i.dtype,f)}};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yc(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,filter:r,bias:a,preluActivationWeights:n}=t,{strides:u,pad:d,dataFormat:l,dilations:h,dimRoundingMode:c,activation:p,leakyreluAlpha:f}=i,m=De(l),g=ee(o.shape,r.shape,u,h,d,c,!1,m);return Xt({x:o,filter:r,convInfo:g,backend:e,bias:a,preluActivationWeights:n,leakyreluAlpha:f,activation:p})}const jc={kernelName:di,backendName:"webgpu",kernelFunc:Yc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qc(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,filter:r,bias:a,preluActivationWeights:n}=t,{strides:u,pad:d,dilations:l,dimRoundingMode:h,activation:c,leakyreluAlpha:p}=i;let f=l;f==null&&(f=[1,1]),E(Lt(u,f),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${u} and dilations '${f}'`);const m=ee(o.shape,r.shape,u,f,d,h,!0),g=[o,r],x=a!=null,C=n!=null;x&&g.push(a),C&&g.push(n);const w=[{type:"int32",data:[m.padInfo.top,m.padInfo.left]},{type:"int32",data:[m.inHeight,m.inWidth]}];let v;return m.outHeight>4&&m.outWidth>4&&m.strideWidth<=2&&m.inChannels===m.outChannels&&m.dilationHeight===1&&m.dilationWidth===1&&m.inChannels%4===0?(v=new qt(m,x,c,C),w.push({type:"int32",data:[v.virtualWidth]})):(v=new Yt(m,x,c,C),w.push({type:"int32",data:[m.filterHeight]},{type:"int32",data:[m.filterWidth]},{type:"int32",data:[m.strideHeight,m.strideWidth]},{type:"int32",data:[m.dilationHeight,m.dilationWidth]})),c==="leakyrelu"&&(w.push({type:"float32",data:[p]}),v.uniforms+=" alpha : f32,"),e.runWebGPUProgram(v,g,"float32",w)}const Zc={kernelName:li,backendName:"webgpu",kernelFunc:Qc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Jc{constructor(t,e){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey=`gathernd_${t}`,this.sliceDim=t,this.uniforms=`sliceDim : i32, strides : ${B(t)},`}getUserCode(){let t;return this.sliceDim>1?t="uniforms.strides[j]":t="uniforms.strides",`
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          var flattenIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexTemp = i32(round(getIndices(coords[0], j)));
            let strideNum = ${t};
            flattenIndex = flattenIndex + indexTemp * strideNum;
          }

          setOutputAtIndex(index, getA(flattenIndex, coords[1]));
        }
      }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eh(s){const{inputs:t,backend:e}=s,{params:i,indices:o}=t,r=o.shape,a=r[r.length-1],n=N(i.shape),[u,d,l,h]=hi(i,o),c=R({inputs:{x:o},backend:e,attrs:{shape:[d,a]}}),p=R({inputs:{x:i},backend:e,attrs:{shape:[N(i.shape)/l,l]}});if(e.shouldExecuteOnCPU([i,o])||i.dtype==="string"){const C=e.readSync(o.dataId),w=e.bufferSync(i),v=pu(C,w,i.dtype,d,a,l,h,i.shape,n);return e.makeTensorInfo(u,i.dtype,v.values)}const f=new Jc(a,[d,l]),m=[{type:"int32",data:[a]},{type:"int32",data:h}],g=e.runWebGPUProgram(f,[p,c],p.dtype,m),x=R({inputs:{x:g},backend:e,attrs:{shape:u}});return e.disposeData(c.dataId),e.disposeData(p.dataId),e.disposeData(g.dataId),x}const th={kernelName:ci,backendName:"webgpu",kernelFunc:eh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class sh{constructor(t,e){this.variableNames=["A","indices"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.slice(),this.aShape=t,this.outputShape=e,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="gather"}getUserCode(){const t=oh(this.aShape);return`
      ${y("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let indexZ = i32(getIndices(resRC.x, resRC.z));
          let inBounds = select(0.0, 1.0, indexZ >= 0 && indexZ < uniforms.aShape[2]);
          setOutputAtIndex(index, inBounds * getA(${t}));
        }
      }
    `}}function oh(s){const t=["resRC.x","resRC.y","resRC.z","resRC.w"],e=[];for(let i=0;i<s.length;i++)i===2?e.push("indexZ"):e.push(`${t[i]}`);return e.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jt(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,indices:r}=t,{axis:a,batchDims:n}=i,u=re(a,o.shape)[0],d=fi(o,r,u,n),l=N(r.shape),h=[],c=R({inputs:{x:o},backend:e,attrs:{shape:[d.batchSize,d.outerSize,d.dimSize,d.sliceSize]}}),p=R({inputs:{x:r},backend:e,attrs:{shape:[d.batchSize,l/d.batchSize]}});h.push(c),h.push(p);const f=[d.batchSize,d.outerSize,l/d.batchSize,d.sliceSize];if(e.shouldExecuteOnCPU([o,r])){const w=e.tensorMap.get(p.dataId).values,v=he(p.shape,p.dtype,w),P=e.tensorMap.get(c.dataId).values,D=he(c.shape,c.dtype,P),F=fu(D,v,f);return h.forEach(A=>e.disposeData(A.dataId)),e.makeTensorInfo(d.outputShape,F.dtype,F.values)}const m=new sh(c.shape,f),g=e.runWebGPUProgram(m,[c,p],c.dtype);h.push(g);const x=R({inputs:{x:g},backend:e,attrs:{shape:d.outputShape}});return h.forEach(C=>e.disposeData(C.dataId)),x}const ih={kernelName:pi,backendName:"webgpu",kernelFunc:Jt};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rh=U({opType:$.GREATER,cpuKernelImpl:gu,dtype:"bool"}),ah={kernelName:mi,backendName:"webgpu",kernelFunc:rh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const nh=U({opType:$.GREATER_EQUAL,dtype:"bool",cpuKernelImpl:mu}),uh={kernelName:gi,backendName:"webgpu",kernelFunc:nh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dh(s){const{inputs:t,backend:e}=s,{input:i}=t;return Zt(i,!0,e)}const lh={kernelName:xi,backendName:"webgpu",kernelFunc:dh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ch=L({opType:b.IS_FINITE,dtype:"bool"}),hh={kernelName:Ci,backendName:"webgpu",kernelFunc:ch};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ph=L({opType:b.IS_INF,dtype:"bool"}),fh={kernelName:wi,backendName:"webgpu",kernelFunc:ph};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mh=L({opType:b.IS_NAN,dtype:"bool"}),gh={kernelName:bi,backendName:"webgpu",kernelFunc:mh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xh(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{alpha:r}=i,a=[{type:"float32",data:[r]}],n=new me(o.shape,b.LEAKYRELU,"alpha : f32,");return e.runWebGPUProgram(n,[o],"float32",a)}const Ch={kernelName:yi,backendName:"webgpu",kernelFunc:xh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wh=U({opType:$.LESS,dtype:"bool",cpuKernelImpl:Cu}),bh={kernelName:Si,backendName:"webgpu",kernelFunc:wh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const yh=U({opType:$.LESS_EQUAL,dtype:"bool",cpuKernelImpl:xu}),Sh={kernelName:vi,backendName:"webgpu",kernelFunc:yh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vh{constructor(t){this.variableNames=[],this.outputShape=[],this.uniforms="start : f32, step : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="linSpace"}getUserCode(){return`
      ${y("index")} {
        if (index < uniforms.size) {
          setOutputAtIndex(index, uniforms.start + f32(index) * uniforms.step);
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ih(s){const{backend:t,attrs:e}=s,{start:i,stop:o,num:r}=e,a=(o-i)/(r-1),n=new vh(r),u=[{type:"float32",data:[i]},{type:"float32",data:[a]}];return t.runWebGPUProgram(n,[],"float32",u)}const kh={kernelName:Ii,backendName:"webgpu",kernelFunc:Ih};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rh=L({opType:b.LOG,cpuKernelImpl:wu}),Ph={kernelName:ki,backendName:"webgpu",kernelFunc:Rh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $h=L({opType:b.LOG1P}),Dh={kernelName:Ri,backendName:"webgpu",kernelFunc:$h};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nh=U({opType:$.LOGICAL_AND,dtype:"bool"}),zh={kernelName:Pi,backendName:"webgpu",kernelFunc:Nh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ah=L({opType:b.LOGICAL_NOT}),Fh={kernelName:$i,backendName:"webgpu",kernelFunc:Ah};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lh=U({opType:$.LOGICAL_OR}),Eh={kernelName:Di,backendName:"webgpu",kernelFunc:Lh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const es=`
  var powValue = 0.0;
  let basis = uniforms.bias + uniforms.alpha * sum;
  if (uniforms.beta == 0.5) {
    powValue = inverseSqrt(basis);
  } else if (uniforms.beta == 1.0) {
    powValue = 1.0 / basis;
  } else {
    powValue = exp(log(basis) * (-uniforms.beta));
  }
`;class Bh{constructor(t){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn"}getUserCode(){return`
    ${y("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];
        let d = coords[3];

        let x = getX(b, r, c, d);
        var sum = 0.0;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let idx = d + i;
          if (idx >= 0 && idx < uniforms.xShape[3]) {
            let z = getX(b, r, c, idx);
            sum = sum + z * z;
          }
        }
        ${es}

        setOutputAtIndex(index, x * powValue);
      }
    }
  `}}class _h{constructor(t,e){this.outputShape=[],this.variableNames=["x"],this.uniforms="radius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[256,1,1],this.maxAllowRadius=16,E(e<=this.maxAllowRadius,()=>`Radius must be less than or equal to ${this.maxAllowRadius}, current radius is ${e}`),this.outputShape=t,this.elementsPerWorkgroup=this.workgroupSize[0]-2*this.maxAllowRadius,this.dispatchLayout={x:[3],y:[2],z:[0,1]},this.dispatch=S(this.dispatchLayout,this.outputShape,[this.elementsPerWorkgroup,this.workgroupSize[1],this.workgroupSize[2]]),this.shaderKey="lrn_shared"}getUserCode(){return`
    var <workgroup>lrnSub: array<f32, ${this.workgroupSize[0]}>;
    const elementsPerWorkgroup = ${this.elementsPerWorkgroup};
    const maxAllowRadius = ${this.maxAllowRadius};

    ${y()} {
      let localDepth = i32(localId.x);
      let workgroupDepth = i32(workgroupId.x) * elementsPerWorkgroup;
      let xDepth = workgroupDepth + localDepth - maxAllowRadius;
      let b = i32(globalId.z) / uniforms.xShape[1];
      let r = i32(globalId.z) - b * uniforms.xShape[1];
      let c = i32(globalId.y);
      let d = workgroupDepth + localDepth;

      var x = 0.0;
      if (xDepth >= 0 && xDepth < uniforms.xShape[3]) {
        x = getX(b, r, c, xDepth);
      }
      lrnSub[localDepth] = x;
      workgroupBarrier();

      if (localDepth < elementsPerWorkgroup && d < uniforms.outShape[3]) {
        var sum = 0.0;
        let index = localDepth + maxAllowRadius;
        for (var i = -uniforms.radius; i <= uniforms.radius; i = i + 1) {
          let z = lrnSub[index + i];
          sum = sum + z * z;
        }
        ${es}

        setOutputAtCoords(b, r, c, d, lrnSub[index] * powValue);
      }
    } `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wh(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{depthRadius:r,bias:a,alpha:n,beta:u}=i;let d;r>16?d=new Bh(o.shape):d=new _h(o.shape,r);const l=[{type:"int32",data:[r]},{type:"float32",data:[a]},{type:"float32",data:[n]},{type:"float32",data:[u]}];return e.runWebGPUProgram(d,[o],o.dtype,l)}const Th={kernelName:Ni,backendName:"webgpu",kernelFunc:Wh};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Vh{constructor(t){this.outputShape=[],this.variableNames=["inputImage","outputImage","dy"],this.uniforms="depthRadius : i32, bias : f32, alpha : f32, beta : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="lrn_grad"}getUserCode(){return`
    ${y("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let b = coords[0];
        let r = coords[1];
        let c = coords[2];

        let MIN_DEPTH_BEGIN = 0;
        let MAX_DEPTH_END = uniforms.outShape[3];
        var result = 0.0;
        for (var d = MIN_DEPTH_BEGIN; d < MAX_DEPTH_END; d++) {
          let depthBegin = max(MIN_DEPTH_BEGIN, d - uniforms.depthRadius);
          let depthEnd = min(MAX_DEPTH_END, d + uniforms.depthRadius + 1);

          var norm = 0.0;
          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            } else {
              break;
            }
          }

          norm = uniforms.alpha * norm + uniforms.bias;

          for (var k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; k++) {
            if (k < depthBegin) {
              continue;
            } else if (k >= depthBegin && k < depthEnd) {
              var dyi = -2.0 * uniforms.alpha * uniforms.beta
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d) / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * uniforms.beta);
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            } else {
              break;
            }
          }
        }

        setOutputAtIndex(index, result);
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Uh(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,y:r,dy:a}=t,{depthRadius:n,bias:u,alpha:d,beta:l}=i,h=new Vh(o.shape),c=[{type:"int32",data:[n]},{type:"float32",data:[u]},{type:"float32",data:[d]},{type:"float32",data:[l]}];return e.runWebGPUProgram(h,[o,r,a],o.dtype,c)}const Mh={kernelName:zi,backendName:"webgpu",kernelFunc:Uh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Oh=U({opType:$.MAX,cpuKernelImpl:yu}),Gh={kernelName:Ai,backendName:"webgpu",kernelFunc:Oh};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hh(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{filterSize:r,strides:a,pad:n,dimRoundingMode:u}=i,l=$e(o.shape,r,a,1,n,u);return Mt(o,l,"max",e)}const Xh={kernelName:Fi,backendName:"webgpu",kernelFunc:Hh};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Kh(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{filterSize:r,strides:a,pad:n,dataFormat:u,dimRoundingMode:d}=i,l=[1,1,1],h=Be(o.shape,r,a,l,n,d,u),c=new nt(h,"max"),p=[{type:"int32",data:[h.strideDepth,h.strideHeight,h.strideWidth]},{type:"int32",data:[h.padInfo.front,h.padInfo.top,h.padInfo.left]},{type:"int32",data:[h.inDepth,h.inHeight,h.inWidth]},{type:"int32",data:[h.effectiveFilterDepth,h.effectiveFilterHeight,h.effectiveFilterWidth]}];return e.runWebGPUProgram(c,[o],o.dtype,p)}const qh={kernelName:Li,backendName:"webgpu",kernelFunc:Kh};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Yh{constructor(t){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec2<i32>, pads : vec2<i32>, dilations : vec2<i32>, filterDims : vec2<i32>,
       outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool2DBackprop"}getUserCode(){return`
      ${y("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords[0];
        let d = coords[3];

        let dyRCCorner = vec2<i32>(coords.yz) - uniforms.pads;
        let dyRCorner = dyRCCorner.x;
        let dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] - 1;
        for (var wR = 0; wR < uniforms.filterDims[0]; wR += uniforms.dilations[0]) {
          let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[0]);

          if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
            continue;
          }
          let idyR = i32(dyR);

          for (var wC = 0; wC < uniforms.filterDims[1]; wC += uniforms.dilations[1]) {
            let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[1]);

            if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
              continue;
            }
            let idyC = i32(dyC);

            let dyValue = getDy(batch, idyR, idyC, d);
            let maxPosValue = lastIndex - i32(getMaxPos(batch, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            let curPosValue = wR * uniforms.filterDims[1] + wC;
            let mask = select(0.0, 1.0, maxPosValue == curPosValue);
            dotProd += dyValue * mask;
          }
        }
        setOutputAtIndex(index, dotProd);
      }
    }
    `}}class jh{constructor(t){this.variableNames=["dy","maxPos"],this.uniforms=`strides : vec3<i32>, pads : vec3<i32>, filterDims : vec3<i32>,
      outDepth : i32, outHeight : i32, outWidth : i32`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t.inShape,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="maxPool3DBackprop"}getUserCode(){return`
      ${y("index")} {
      if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
        let batch = coords.x;
        let ch = coords.u;

        let dyCorner = vec3<i32>(coords.y, coords.z, coords.w) - uniforms.pads;
        let dyDCorner = dyCorner.x;
        let dyRCorner = dyCorner.y;
        let dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        var dotProd = 0.0;
        let lastIndex = uniforms.filterDims[0] * uniforms.filterDims[1] * uniforms.filterDims[2] - 1;

        for (var wD = 0; wD < uniforms.filterDims[0]; wD++) {
          let dyD = f32(dyDCorner + wD) / f32(uniforms.strides[0]);

          if (dyD < 0.0 || dyD >= f32(uniforms.outDepth) || fract(dyD) > 0.0) {
            continue;
          }
          let idyD = i32(dyD);

          for (var wR = 0; wR < uniforms.filterDims[1]; wR++) {
            let dyR = f32(dyRCorner + wR) / f32(uniforms.strides[1]);

            if (dyR < 0.0 || dyR >= f32(uniforms.outHeight) || fract(dyR) > 0.0) {
              continue;
            }
            let idyR = i32(dyR);

            for (var wC = 0; wC < uniforms.filterDims[2]; wC++) {
              let dyC = f32(dyCCorner + wC) / f32(uniforms.strides[2]);

              if (dyC < 0.0 || dyC >= f32(uniforms.outWidth) || fract(dyC) > 0.0) {
                continue;
              }
              let idyC = i32(dyC);

              let dyValue = getDy(batch, idyD, idyR, idyC, ch);
              let maxPosValue = lastIndex - i32(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              let curPosValue = wD * uniforms.filterDims[1] * uniforms.filterDims[2] + wR * uniforms.filterDims[2] + wC;
              let mask = select(0.0, 1.0, maxPosValue == curPosValue);
              dotProd += dyValue * mask;
            }
          }
        }

        setOutputAtIndex(index, dotProd);
      }
    }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qh(s){const{inputs:t,backend:e,attrs:i}=s,{dy:o,input:r}=t,a=r,{filterSize:n,strides:u,pad:d,dimRoundingMode:l}=i,h=[1,1,1],c=Be(a.shape,n,u,h,d,l),p=new nt(c,"max",!0);let f=[{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.padInfo.front,c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.inDepth,c.inHeight,c.inWidth]},{type:"int32",data:[c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth]}];const m=e.runWebGPUProgram(p,[a],"int32",f),g=new jh(c);f=[{type:"int32",data:[c.strideDepth,c.strideHeight,c.strideWidth]},{type:"int32",data:[c.effectiveFilterDepth-1-c.padInfo.front,c.effectiveFilterHeight-1-c.padInfo.top,c.effectiveFilterWidth-1-c.padInfo.left]},{type:"int32",data:[c.effectiveFilterDepth,c.effectiveFilterHeight,c.effectiveFilterWidth]},{type:"int32",data:[c.outDepth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]}];const x=e.runWebGPUProgram(g,[o,m],a.dtype,f);return e.disposeData(m.dataId),x}const Zh={kernelName:Ei,backendName:"webgpu",kernelFunc:Qh};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jh(s){const{inputs:t,backend:e,attrs:i}=s,{dy:o,input:r,output:a}=t,n=r;it([r,a],"maxPoolGrad");const{filterSize:u,strides:d,pad:l,dimRoundingMode:h}=i,c=$e(n.shape,u,d,1,l,h),p=new Ie(c,"max",!0);let f=[{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.padInfo.top,c.padInfo.left]},{type:"int32",data:[c.dilationHeight,c.dilationWidth]},{type:"int32",data:[c.inHeight,c.inWidth]},{type:"int32",data:[c.effectiveFilterHeight,c.effectiveFilterWidth]}];const m=e.runWebGPUProgram(p,[n],"int32",f),g=new Yh(c);f=[{type:"int32",data:[c.strideHeight,c.strideWidth]},{type:"int32",data:[c.effectiveFilterHeight-1-c.padInfo.top,c.effectiveFilterWidth-1-c.padInfo.left]},{type:"int32",data:[c.dilationHeight,c.dilationWidth]},{type:"int32",data:[c.effectiveFilterHeight,c.effectiveFilterWidth]},{type:"int32",data:[c.outHeight]},{type:"int32",data:[c.outWidth]}];const x=e.runWebGPUProgram(g,[o,m],n.dtype,f);return e.disposeData(m.dataId),x}const ep={kernelName:Bi,backendName:"webgpu",kernelFunc:Jh};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tp(s){const{inputs:t,backend:e,attrs:i}=s,{filterSize:o,strides:r,pad:a,includeBatchInIndex:n}=i,{x:u}=t;E(u.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${u.shape.length}.`);const d=[1,1];E(Lt(r,d),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${r} and dilations '${d}'`);const l=$e(u.shape,o,r,d,a),h=[{type:"int32",data:[l.strideHeight,l.strideWidth]},{type:"int32",data:[l.padInfo.top,l.padInfo.left]},{type:"int32",data:[l.dilationHeight,l.dilationWidth]},{type:"int32",data:[l.inHeight,l.inWidth]},{type:"int32",data:[l.effectiveFilterHeight,l.effectiveFilterWidth]}];let c=new Ie(l,"max",!1);const p=e.runWebGPUProgram(c,[u],u.dtype,h);c=new Ie(l,"max",!0,!0,n);const f=e.runWebGPUProgram(c,[u],"int32",h);return[p,f]}const sp={kernelName:_i,backendName:"webgpu",kernelFunc:tp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function op(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{axis:r,keepDims:a}=i;return ue(o,r,a,"min",e)}const ip={kernelName:Wi,backendName:"webgpu",kernelFunc:op};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rp=U({opType:$.MIN,cpuKernelImpl:Su}),ap={kernelName:Ti,backendName:"webgpu",kernelFunc:rp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class np{constructor(t,e,i){this.uniforms="",this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.map((o,r)=>o[0]+t[r]+o[1]),this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,e.map((o,r)=>{this.uniforms+=` pad${r} : vec2<i32>,`}),this.offset=i==="reflect"?0:1,this.shaderKey=`mirrorPad_${i}`}getUserCode(){const t=this.xShape.length,e=this.xShape.map((d,l)=>`uniforms.pad${l}[0]`).join(","),i=this.xShape.map((d,l)=>`uniforms.pad${l}[0] + uniforms.xShape${t>1?`[${l}]`:""}`).join(","),o=t===1?"start":"start[i]",r=t===1?"end":"end[i]",a=t===1?"outC":"outC[i]",n=B(t),u=t>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,t):"coords";return`
      ${y("index")} {
        if (index < uniforms.size) {
          let start = ${n}(${e});
          let end = ${n}(${i});
          var outC = getCoordsFromIndex(index);
          for (var i = 0; i < ${t}; i = i + 1) {
            if (${a} < ${o}) {
              ${a} = ${o} * 2 - ${a} - ${this.offset};
            } else if(${a} >= ${r}) {
              ${a} = (${r} - 1) * 2 - ${a} + ${this.offset};
            }
          }
          let coords = outC - start;
          setOutputAtIndex(index, getX(${u}));
        }
      }
    `}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const up={kernelName:Vi,backendName:"webgpu",kernelFunc:({inputs:s,attrs:t,backend:e})=>{const{x:i}=s,{paddings:o,mode:r}=t,a=e,n=o.map(l=>({type:"int32",data:[l[0],l[1]]})),u=new np(i.shape,o,r);return a.runWebGPUProgram(u,[i],i.dtype,n)}};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dp=U({opType:$.MOD}),lp={kernelName:Ui,backendName:"webgpu",kernelFunc:dp};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cp{constructor(t,e){this.variableNames=["probs"],this.outputShape=[],this.uniforms="seed : f32, numOutcomes: i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,e],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="multinomial"}getUserCode(){return`
    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    fn random (seed : f32, resultUV : vec2<f32>) -> f32 {
      let HASHSCALE1 = 443.8975;
      let p = resultUV * seed;
      var p3  = fract(vec3<f32>(p.xyx) * HASHSCALE1);
      p3 = p3 + dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${y("index")} {
      if (index < uniforms.size) {
        let coords = getOutputCoords();
        let batch = coords[0];

        let resUV = vec2<f32>(f32(coords[1]) / f32(uniforms.outShape[1]),
            f32(coords[0]) / f32(uniforms.outShape[0]));
        let r = random(uniforms.seed, resUV);
        var cdf = 0.0;
        for (var i = 0; i < uniforms.numOutcomes - 1; i = i + 1) {
          cdf = cdf + getProbs(batch, i);

          if (r < cdf) {
            setOutputAtIndexI32(index, i);
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutputAtIndexI32(index, uniforms.numOutcomes - 1);
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class hp{constructor(t){this.variableNames=["logits"],this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=[this.outputShape[0],1,1],this.outputShape[1]>=4096?this.workgroupSize=[256,1,1]:this.workgroupSize=[64,1,1],this.shaderKey="softmax"}getUserCode(){return`
    var<workgroup> buf : array<f32, ${this.workgroupSize[0]}>;
    var<workgroup> rowMaxShared : f32;
    var<workgroup> rowSumShared : f32;
    const blockSize = ${this.workgroupSize[0]};
    ${y("index")} {
      let row = index / blockSize;
      let tid = i32(localId.x);
      let cols = uniforms.outShape[1];

      var threadMax = -3.402823e+38f;
      for (var col = tid; col < cols; col += blockSize) {
        let value = getLogits(row, col);
        threadMax = max(threadMax, value);
      }
      if (tid < cols) {
        buf[tid] = threadMax;
      }
      workgroupBarrier();

      var reduceSize = min(cols, blockSize);
      for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
        reduceSize = currSize + (reduceSize & 1);
        if (tid < currSize) {
          buf[tid] = max(buf[tid], buf[tid + reduceSize]);
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowMaxShared = buf[0];
      }
      workgroupBarrier();

      var threadSum = 0.0;
      for (var col = tid; col < cols; col += blockSize) {
        let subExp = exp(getLogits(row, col) - rowMaxShared);
        threadSum += subExp;
      }
      buf[tid] = threadSum;
      workgroupBarrier();

      for (var currSize = blockSize >> 1;  currSize > 0; currSize = currSize >> 1) {
        if (tid < currSize) {
          buf[tid] = buf[tid] + buf[tid + currSize];
        }
        workgroupBarrier();
      }

      if (tid == 0) {
        rowSumShared = buf[0];
      }
      workgroupBarrier();

      for (var col = tid; col < cols; col += blockSize) {
        let value = exp(getLogits(row, col) - rowMaxShared) / rowSumShared;
        setOutputAtCoords(row, col, value);
      }
  }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ts(s){const{inputs:t,backend:e,attrs:i}=s,{logits:o}=t,{dim:r}=i,a=R({inputs:{x:o},backend:e,attrs:{shape:[N(o.shape)/o.shape[r],o.shape[r]]}}),n=new hp(a.shape),u=e.runWebGPUProgram(n,[a],o.dtype),d=R({inputs:{x:u},backend:e,attrs:{shape:o.shape}});return e.disposeData(a.dataId),e.disposeData(u.dataId),d}const pp={kernelName:Mi,backendName:"webgpu",kernelFunc:ts};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fp(s){const{inputs:t,backend:e,attrs:i}=s,{logits:o}=t,{numSamples:r,seed:a,normalized:n}=i,u=n?o:ts({inputs:{logits:o},backend:e,attrs:{dim:o.shape.length-1}}),d=u.shape[0],l=u.shape[1],h=new cp(d,r),c=[{type:"float32",data:[a]},{type:"int32",data:[l]}],p=e.runWebGPUProgram(h,[u],"int32",c);return n||e.disposeData(u.dataId),p}const mp={kernelName:Oi,backendName:"webgpu",kernelFunc:fp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gp(s){const{inputs:t,backend:e}=s,{x:i}=t;if(e.shouldExecuteOnCPU([i])){const r=e.tensorMap.get(i.dataId),[a,n]=Iu(r.values,i.shape,i.dtype);return e.makeTensorInfo(n,i.dtype,a)}const o=new me(i.shape,b.NEG);return e.runWebGPUProgram(o,[i],i.dtype)}const xp={kernelName:Gi,backendName:"webgpu",kernelFunc:gp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cp(s){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:i}=s,{boxes:o,scores:r}=t,{maxOutputSize:a,iouThreshold:n,scoreThreshold:u}=i,d=e.readSync(o.dataId),l=e.readSync(r.dataId),{selectedIndices:h}=Xi(d,l,a,n,u);return e.makeTensorInfo([h.length],"int32",new Int32Array(h))}const wp={kernelName:Hi,backendName:"webgpu",kernelFunc:Cp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bp(s){console.warn("tf.nonMaxSuppression() in webgpu locks the UI thread. Call tf.nonMaxSuppressionAsync() instead");const{inputs:t,backend:e,attrs:i}=s,{boxes:o,scores:r}=t,{maxOutputSize:a,iouThreshold:n,scoreThreshold:u,softNmsSigma:d}=i,l=e.readSync(o.dataId),h=e.readSync(r.dataId),c=a,p=n,f=u,m=d,{selectedIndices:g,selectedScores:x}=qi(l,h,c,p,f,m);return[e.makeTensorInfo([g.length],"int32",new Int32Array(g)),e.makeTensorInfo([x.length],"float32",new Float32Array(x))]}const yp={kernelName:Ki,backendName:"webgpu",kernelFunc:bp};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Sp{constructor(t,e){this.variableNames=["x"],this.uniforms="onValue : f32, offValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t,e],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="onehot"}getUserCode(){return`
      ${y("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          setOutputAtIndex(index, mix(uniforms.offValue, uniforms.onValue,
                                      f32(i32(round(getX(coords.x))) == coords.y)));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vp(s){const{inputs:t,backend:e,attrs:i}=s,{indices:o}=t,{dtype:r,depth:a,onValue:n,offValue:u}=i,d=N(o.shape),l=new Sp(d,a),h=R({inputs:{x:o},backend:e,attrs:{shape:[d]}}),c=[{type:"float32",data:[n]},{type:"float32",data:[u]}],p=e.runWebGPUProgram(l,[h],r,c);e.disposeData(h.dataId);const f=[...o.shape,a],m=R({inputs:{x:p},backend:e,attrs:{shape:f}});return e.disposeData(p.dataId),m}const Ip={kernelName:Yi,backendName:"webgpu",kernelFunc:vp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ee(s){const{inputs:t,backend:e}=s,{x:i}=t;if(i.dtype==="complex64"){const o=Ne({inputs:{input:i},backend:e}),r=Ee({inputs:{x:o},backend:e}),a=Ue({inputs:{input:i},backend:e}),n=Ee({inputs:{x:a},backend:e}),u=ne({inputs:{real:r,imag:n},backend:e});return e.disposeData(o.dataId),e.disposeData(r.dataId),e.disposeData(a.dataId),e.disposeData(n.dataId),u}else return X({attrs:{shape:i.shape,dtype:i.dtype,value:i.dtype==="string"?"":0},backend:e})}const kp={kernelName:ji,backendName:"webgpu",kernelFunc:Ee};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ss(s){const{inputs:t,backend:e}=s,{x:i}=t;if(i.dtype==="string")throw new Error("onesLike is not supported under string dtype");if(i.dtype==="complex64"){const o=Ne({inputs:{input:i},backend:e}),r=ss({inputs:{x:o},backend:e}),a=Ue({inputs:{input:i},backend:e}),n=Ee({inputs:{x:a},backend:e}),u=ne({inputs:{real:r,imag:n},backend:e});return e.disposeData(o.dataId),e.disposeData(r.dataId),e.disposeData(a.dataId),e.disposeData(n.dataId),u}else return X({attrs:{shape:i.shape,dtype:i.dtype,value:1},backend:e})}const Rp={kernelName:Qi,backendName:"webgpu",kernelFunc:ss};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pp(s){const{inputs:t,backend:e,attrs:i}=s,{axis:o}=i;if(t.length===1)return qe({inputs:{input:t[0]},backend:e,attrs:{dim:o}});const r=t[0].shape,a=t[0].dtype;t.forEach(l=>{Ji(r,l.shape,"All tensors passed to stack must have matching shapes"),E(a===l.dtype,()=>"All tensors passed to stack must have matching dtypes")});const n=[],u=t.map(l=>{const h=qe({inputs:{input:l},backend:e,attrs:{dim:o}});return n.push(h),h}),d=Ht({inputs:u,backend:e,attrs:{axis:o}});return n.forEach(l=>e.disposeData(l.dataId)),d}const $p={kernelName:Zi,backendName:"webgpu",kernelFunc:Pp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function os(s,t=!1){const e=s.length,i=B(e),o=s.map((h,c)=>`uniforms.pad${c}[0]`).join(","),r=s.map((h,c)=>`uniforms.pad${c}[0] + uniforms.xShape${e>1?`[${c}]`:""}`).join(","),a=e>1?`${i}(${o})`:`${o}`,n=e>1?`${i}(${r})`:`${r}`,u=e>1?"any(paddedCoords < start)":"paddedCoords < start",d=e>1?"any(paddedCoords >= end)":"paddedCoords >= end",l=e>1?["coords[0]","coords[1]","coords[2]","coords[3]"].slice(0,e):"coords";return`
        let start = ${a};
        let end = ${n};
        if (${u} || ${d}) {
          setOutputAtIndex(index, ${t?0:"uniforms.constantValue"});
        } else {
          let coords = paddedCoords - start;
          setOutputAtIndex(index, getX(${l}));
        }
  `}class Dp{constructor(t,e){this.variableNames=["x"],this.uniforms="constantValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e.map((i,o)=>i[0]+t[o]+i[1]),this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),e.map((i,o)=>{this.uniforms+=` pad${o} : vec2<i32>,`}),this.xShape=t,this.shaderKey="pad"}getUserCode(){return`
      ${y("index")} {
        if (index < uniforms.size) {
          let paddedCoords = getCoordsFromIndex(index);
          ${os(this.xShape)}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Np=s=>{const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{paddings:r,constantValue:a}=i;if(r.every(d=>fe(d,[0,0])))return K({inputs:{x:o},backend:e});if(N(o.shape)===0){const d=r.map((l,h)=>l[0]+o.shape[h]+l[1]);return X({backend:e,attrs:{shape:d,value:a,dtype:o.dtype}})}const n=[{type:"float32",data:[a]}];r.map(d=>n.push({type:"int32",data:[d[0],d[1]]}));const u=new Dp(o.shape,r);return e.runWebGPUProgram(u,[o],o.dtype,n)},zp={kernelName:er,backendName:"webgpu",kernelFunc:Np};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ap=U({opType:$.POW}),Fp={kernelName:tr,backendName:"webgpu",kernelFunc:Ap};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lp(s){const{inputs:t,backend:e}=s,{x:i,alpha:o}=t,r=new Fe($.PRELU,i.shape,o.shape);return e.runWebGPUProgram(r,[i,o],"float32")}const Ep={kernelName:sr,backendName:"webgpu",kernelFunc:Lp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bp(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{axis:r,keepDims:a}=i;return ue(o,r,a,"prod",e)}const _p={kernelName:or,backendName:"webgpu",kernelFunc:Bp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wp=s=>{const{backend:t,attrs:e}=s,{start:i,stop:o,step:r,dtype:a}=e,n=Pu(i,o,r,a);return t.makeTensorInfo([n.length],a,n)},Tp={kernelName:ir,backendName:"webgpu",kernelFunc:Wp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vp=U({opType:$.DIV}),Up={kernelName:rr,backendName:"webgpu",kernelFunc:Vp};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Mp=L({opType:b.RECIPROCAL}),Op={kernelName:ar,backendName:"webgpu",kernelFunc:Mp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gp=L({opType:b.RELU}),Hp={kernelName:nr,backendName:"webgpu",kernelFunc:Gp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xp=L({opType:b.RELU6}),Kp={kernelName:ur,backendName:"webgpu",kernelFunc:Xp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class qp{constructor(t,e,i){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, halfPixelCenters : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],e,i,t[3]],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="resizeBilinear"}getUserCode(){return`
      ${y("index")} {
        if (index < uniforms.size) {
        let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC =
            (vec2<f32>(rc) + vec2<f32>(uniforms.halfPixelCenters)) *
            effectiveInputOverOutputRatioRC - vec2<f32>(uniforms.halfPixelCenters);

          // Compute the four integer indices.
          let sourceFloorRC = vec2<i32>(sourceFracIndexRC);
          let sourceCeilRC = vec2<i32>(
            min(vec2<f32>(uniforms.xShape.yz) - vec2<f32>(1.0), ceil(sourceFracIndexRC)));

          let topLeft = getX(b, sourceFloorRC.x, sourceFloorRC.y, d);
          let bottomLeft = getX(b, sourceCeilRC.x, sourceFloorRC.y, d);
          let topRight = getX(b, sourceFloorRC.x, sourceCeilRC.y, d);
          let bottomRight = getX(b, sourceCeilRC.x, sourceCeilRC.y, d);

          let fracRC = sourceFracIndexRC - vec2<f32>(sourceFloorRC);

          let top = topLeft + (topRight - topLeft) * fracRC.y;
          let bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
          let newValue = top + (bottom - top) * fracRC.x;

          setOutputAtIndex(index, newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yp(s){const{inputs:t,backend:e,attrs:i}=s,{images:o}=t,{alignCorners:r,size:a,halfPixelCenters:n}=i,[u,d]=a,l=r&&u>1?1:0,h=r&&d>1?1:0,p=[{type:"float32",data:[l,h]},{type:"float32",data:[n?.5:0]}],f=new qp(o.shape,u,d);return e.runWebGPUProgram(f,[o],"float32",p)}const jp={kernelName:dr,backendName:"webgpu",kernelFunc:Yp};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Qp{constructor(t,e){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, heightScale : f32, widthScale : f32,
       invHeightScale : f32, invWidthScale : f32, winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=e,this.shaderKey=`resizeBilinearBackprop_${e}`}getUserCode(){return`
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(startRLerp - f32(uniforms.winHeight / 2));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(startCLerp - f32(uniforms.winWidth / 2));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let dxR = f32(dyR) * uniforms.heightScale;
              let topDxRIndex = i32(floor(dxR));
              let bottomDxRIndex = i32(min(ceil(dxR), f32(uniforms.outShape[1] - 1)));
              let dxRLerp = dxR - f32(topDxRIndex);
              let inverseDxRLerp = 1.0 - dxRLerp;

              let dxC = f32(dyC) * uniforms.widthScale;
              let leftDxCIndex = i32(floor(dxC));
              let rightDxCIndex = i32(min(ceil(dxC), f32(uniforms.outShape[2] - 1)));
              let dxCLerp = dxC - f32(leftDxCIndex);
              let inverseDxCLerp = 1.0 - dxCLerp;

              if (r == topDxRIndex && c == leftDxCIndex) {
                // topLeft
                accumulator +=
                  getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
              }

              if (r == topDxRIndex && c == rightDxCIndex) {
                // topRight
                accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
              }

              if (r == bottomDxRIndex && c == leftDxCIndex) {
                // bottomLeft
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
              }

              if (r == bottomDxRIndex && c == rightDxCIndex) {
                // bottomRight
                accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zp(s){const{inputs:t,backend:e,attrs:i}=s,{images:o,dy:r}=t,{alignCorners:a}=i,[,n,u]=o.shape,[,d,l]=r.shape,h=[a&&d>1?n-1:n,a&&l>1?u-1:u],c=[a&&d>1?d-1:d,a&&l>1?l-1:l],p=h[0]/c[0],f=h[1]/c[1],m=1/p,g=1/f,x=Math.ceil(m)*2+2,C=Math.ceil(g)*2+2,w=new Qp(o.shape,a),v=[{type:"int32",data:h},{type:"int32",data:c},{type:"float32",data:[p]},{type:"float32",data:[f]},{type:"float32",data:[m]},{type:"float32",data:[g]},{type:"int32",data:[x]},{type:"int32",data:[C]}];return e.runWebGPUProgram(w,[r],r.dtype,v)}const Jp={kernelName:lr,backendName:"webgpu",kernelFunc:Zp};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ef{constructor(t,e,i,o){this.variableNames=["x"],this.uniforms="adjustHeightWidth : vec2<f32>, roundBase : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=[t[0],e,i,t[3]],this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.halfPixelCenters=o,this.shaderKey=`resizeNearest_${o}`}getUserCode(){let t;return this.halfPixelCenters?t="max((vec2<f32>(rc) + vec2<f32>(0.5)) * effectiveInputOverOutputRatioRC, vec2<f32>(0.0))":t="vec2<f32>(rc) * effectiveInputOverOutputRatioRC",`
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let b = coords[0];
          let d = coords[3];
          let rc = coords.yz;

          let effectiveInSize = vec2<f32>(
            f32(uniforms.xShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.xShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveOutSize = vec2<f32>(
            f32(uniforms.outShape.y) - uniforms.adjustHeightWidth[0],
            f32(uniforms.outShape.z) - uniforms.adjustHeightWidth[1]);

          let effectiveInputOverOutputRatioRC =
              effectiveInSize / effectiveOutSize;

          // Fractional source index
          let sourceFracIndexRC = ${t};

          // Compute the coordinators of nearest neighbor point.
          let inputShapeRC = vec2<f32>(f32(uniforms.xShape.y), f32(uniforms.xShape.z));
          let sourceNearestRC = vec2<i32>(
            min(inputShapeRC - 1.0, floor(sourceFracIndexRC + uniforms.roundBase)));
          let newValue = getX(b, sourceNearestRC.x, sourceNearestRC.y, d);

          setOutputAtIndex(index, newValue);
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tf(s){const{inputs:t,backend:e,attrs:i}=s,{images:o}=t,{alignCorners:r,halfPixelCenters:a,size:n}=i,[u,d]=n,l=r&&u>1?1:0,h=r&&d>1?1:0,p=[{type:"float32",data:[l,h]},{type:"float32",data:[r?.5:0]}],f=new ef(o.shape,u,d,a);return e.runWebGPUProgram(f,[o],o.dtype,p)}const sf={kernelName:cr,backendName:"webgpu",kernelFunc:tf};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class of{constructor(t,e){this.variableNames=["dy"],this.uniforms=`effectiveXSize : vec2<i32>, effectiveYSize : vec2<i32>, invHeightScale : f32, invWidthScale : f32,
       winHeight : i32, winWidth : i32,`,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.alignCorners=e,this.shaderKey=`resizeNearestNeigborBackprop_${e}`}getUserCode(){return`
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getOutputCoords();
          let b = coords[0];
          let d = coords[3];
          let r = coords[1];
          let c = coords[2];

          var accumulator = 0.0;

          // Compute bounds for where in dy we will look
          let startRLerp = floor(f32(r) * uniforms.invHeightScale);
          let startDyR = i32(floor(startRLerp - f32(uniforms.winHeight / 2)));

          let startCLerp = floor(f32(c) * uniforms.invWidthScale);
          let startDyC = i32(floor(startCLerp - f32(uniforms.winWidth / 2)));

          // Loop over dy
          for (var dyROffset = 0; dyROffset < uniforms.winHeight; dyROffset++) {
            let dyR = startDyR + dyROffset;

            // Guard against the window exceeding the bounds of dy
            if (dyR < 0 || dyR >= uniforms.dyShape[1]) {
              continue;
            }

            for (var dyCOffset = 0; dyCOffset < uniforms.winWidth; dyCOffset++) {
              let dyC = startDyC + dyCOffset;

              // Guard against the window exceeding the bounds of dy
              if (dyC < 0 || dyC >= uniforms.dyShape[2]) {
                continue;
              }

              let sourceFracRow = f32(uniforms.effectiveXSize[0]) *
                  (f32(dyR) / f32(uniforms.effectiveYSize[0]));

              let sourceFracCol = f32(uniforms.effectiveXSize[1]) *
                  (f32(dyC) / f32(uniforms.effectiveYSize[1]));

              let sourceNearestRow =
                  i32(min(f32(uniforms.outShape[1] - 1),
                  ${this.alignCorners?"floor(sourceFracRow + 0.5)":"floor(sourceFracRow)"}));

              let sourceNearestCol =
                  i32(min(f32(uniforms.outShape[2] - 1),
                  ${this.alignCorners?"floor(sourceFracCol + 0.5)":"floor(sourceFracCol)"}));

              if (r == sourceNearestRow && c == sourceNearestCol) {
                accumulator += getDy(b, dyR, dyC, d);
              }
            }
          }
          // End loop over dy

          setOutputAtIndex(index, accumulator);
        }
      }
    `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rf(s){const{inputs:t,backend:e,attrs:i}=s,{images:o,dy:r}=t,{alignCorners:a}=i,[,n,u]=o.shape,[,d,l]=r.shape,h=[a&&d>1?n-1:n,a&&l>1?u-1:u],c=[a&&d>1?d-1:d,a&&l>1?l-1:l],p=h[0]/c[0],f=h[1]/c[1],m=1/p,g=1/f,x=Math.ceil(m)*2+2,C=Math.ceil(g)*2+2,w=new of(o.shape,a),v=[{type:"int32",data:h},{type:"int32",data:c},{type:"float32",data:[m]},{type:"float32",data:[g]},{type:"int32",data:[x]},{type:"int32",data:[C]}];return e.runWebGPUProgram(w,[r],r.dtype,v)}const af={kernelName:hr,backendName:"webgpu",kernelFunc:rf};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class nf{constructor(t){this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=" axis : vec4<i32>,",this.shaderKey="reverse"}getUserCode(){return`
      
      // Using uniform variables as judging conditions, so the function has
      // coherent execution within all threads.
      fn getReverseCoords(coords : vec4<i32>) -> vec4<i32> {
        var reverseCoords = coords;
        if (uniforms.axis[0] == 1) {
          reverseCoords[0] = uniforms.xShape[0] - coords[0] - 1;
        }
        if (uniforms.axis[1] == 1) {
          reverseCoords[1] = uniforms.xShape[1] - coords[1] - 1;
        }
        if (uniforms.axis[2] == 1) {
          reverseCoords[2] = uniforms.xShape[2] - coords[2] - 1;
        }
        if (uniforms.axis[3] == 1) {
          reverseCoords[3] = uniforms.xShape[3] - coords[3] - 1;
        }

        return reverseCoords;
      }
    
      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let reverseCoords = getReverseCoords(coords);
          setOutputAtIndex(index, getX(reverseCoords[0],
              reverseCoords[1], reverseCoords[2], reverseCoords[3]));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uf(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{dims:r}=i,a=o.shape.length;if(a===0)return K({inputs:{x:o},backend:e});const n=o.shape,u=[1,1,1,1];n.forEach((g,x)=>{const C=x+4-a;u[C]=g});const d=re(r,o.shape),l=[0,0,0,0];d.forEach(g=>{const x=g+4-a;l[x]=1});const h=[{type:"int32",data:l}],c=R({inputs:{x:o},backend:e,attrs:{shape:u}}),p=new nf(u),f=e.runWebGPUProgram(p,[c],c.dtype,h);e.disposeData(c.dataId);const m=R({inputs:{x:f},backend:e,attrs:{shape:n}});return e.disposeData(f.dataId),m}const df={kernelName:pr,backendName:"webgpu",kernelFunc:uf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class lf{constructor(t,e){this.outputShape=[],this.variableNames=["x"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`centerX : f32, centerY : f32, sinRadians : f32,
          cosRadians : f32,`,this.shaderKey="rotate",this.outputShape=t,typeof e=="number"?(this.uniforms+=" fillValue : f32,",this.fillSnippet="var outputValue = uniforms.fillValue;",this.shaderKey+="_float"):(this.uniforms+=" fillValue : vec3<f32>,",this.fillSnippet="var outputValue = uniforms.fillValue[coords[3]];",this.shaderKey+="_vec3")}getUserCode(){return`
        ${y("index")} {
          if (index < uniforms.size) {
            let coords = getCoordsFromIndex(index);
            let coordXFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.cosRadians - (f32(coords[1]) - uniforms.centerY) *
                uniforms.sinRadians;
            let coordYFloat = (f32(coords[2]) - uniforms.centerX) *
                uniforms.sinRadians + (f32(coords[1]) - uniforms.centerY) *
                uniforms.cosRadians;
            let coordX = i32(round(coordXFloat + uniforms.centerX));
            let coordY = i32(round(coordYFloat + uniforms.centerY));
            ${this.fillSnippet}
            if(coordX >= 0 && coordX < uniforms.xShape[2] && coordY >= 0 &&
                coordY < uniforms.xShape[1]) {
              outputValue = getX(coords[0], coordY, coordX, coords[3]);
            }
            setOutputAtIndex(index, outputValue);
          }
        }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cf={kernelName:fr,backendName:"webgpu",kernelFunc:({inputs:s,attrs:t,backend:e})=>{const{image:i}=s,{radians:o,fillValue:r,center:a}=t,n=e,u=new lf(i.shape,r),[d,l]=mr(a,i.shape[1],i.shape[2]),h=[{type:"float32",data:[d]},{type:"float32",data:[l]},{type:"float32",data:[Math.sin(o)]},{type:"float32",data:[Math.cos(o)]}];return typeof r=="number"?h.push({type:"float32",data:[Number.parseFloat(r.toFixed(2))]}):h.push({type:"float32",data:r}),n.runWebGPUProgram(u,[i],i.dtype,h)}};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hf=L({opType:b.ROUND}),pf={kernelName:gr,backendName:"webgpu",kernelFunc:hf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ff=L({opType:b.RSQRT,cpuKernelImpl:$u}),mf={kernelName:xr,backendName:"webgpu",kernelFunc:ff};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class be{constructor(t,e,i,o,r,a,n,u=!0){this.variableNames=["updates","indices"],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=a,this.type=n,this.sumDupeIndices=u,this.dispatchLayout=I(t),this.dispatch=S(this.dispatchLayout,t,this.workgroupSize),this.sliceDimGreaterThanOne=e>1,this.shaderKey=`scatter_${i}_${o}_${this.sliceDimGreaterThanOne}_${n}_${u}_${r.length}`;const d=B(r.length);this.uniforms=`sliceDim : i32, strides: ${d}, updatesSize: i32,`,this.updatesRank=o,this.indicesRank=i}getUserCode(){let t="";this.indicesRank===1?t="coords[0]":this.indicesRank===2&&(t="coords[0], j");const e=`getIndices(${t})`,i=this.sliceDimGreaterThanOne?"uniforms.strides[j]":"uniforms.strides";let o="",r="";this.dispatchLayout.x.length===1?(o="flattenedIndex",r=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> i32 {
        return index;
      }
      `):this.dispatchLayout.x.length===2&&(o="vec2<i32>(flattenedIndex, coords[1])",r=`
      fn getUpdatesCoordsFromFlatIndex(index : i32) -> vec2<i32> {
        // N.B. |updates| could be a scalar tensor, conceptually representing a
        // 2D tensor with all values equal to that. By design, its size must be
        // the same as |outShape[1]| in one dimension, and |indicesShape[0]|
        // gives the other.
        let sliceSize = uniforms.outShape[1];
        let d0 = index / sliceSize;
        let d1 = index - d0 * sliceSize;
        return vec2<i32>(d0, d1);
      }
      `);const n=`getUpdates(${Array.from({length:this.updatesRank},(d,l)=>`coords[${l}]`).join(", ")})`;return`
    ${r}
      ${y("index")} {
        if (index < uniforms.updatesSize) {
          let coords = getUpdatesCoordsFromFlatIndex(index);
          var flattenedIndex = 0;
          for (var j = 0; j < uniforms.sliceDim; j = j + 1) {
            let indexInside = i32(round(${e}));
            flattenedIndex = flattenedIndex + indexInside * ${i};
          }
          let updateValue =
              ${oe(this.type)}(${n});
          let flatIndex = getOutputIndexFromCoords(${o});

          ${this.sumDupeIndices?te("&result[flatIndex]","updateValue",this.type):"atomicStore(&result[flatIndex], bitcast<i32>(updateValue));"}
        }
      }`}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gf(s){const{inputs:t,backend:e,attrs:i}=s,{indices:o,updates:r}=t,{shape:a}=i,{sliceRank:n,numUpdates:u,sliceSize:d,strides:l,outputSize:h}=et(r,o,a),c=[h/d,d];if(h===0)return e.makeTensorInfo(a,o.dtype);const p=R({inputs:{x:o},backend:e,attrs:{shape:[u,n]}}),f=R({inputs:{x:r},backend:e,attrs:{shape:[u,d]}}),m=f.dtype,g=X({backend:e,attrs:{shape:c,value:0,dtype:m}}),x=N(f.shape),C=[{type:"int32",data:[n]},{type:"int32",data:l},{type:"int32",data:[x]}],w=new be(f.shape,n,p.shape.length,f.shape.length,l,c,m),v=e.runWebGPUProgram(w,[f,p],m,C,g),k=R({inputs:{x:v},backend:e,attrs:{shape:a}});return e.disposeData(p.dataId),e.disposeData(f.dataId),e.disposeData(v.dataId),k}const xf={kernelName:Cr,backendName:"webgpu",kernelFunc:gf};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Cf{constructor(t,e){this.outputShape=[],this.variableNames=["sortedSequence","values"],this.uniforms="numInputs : i32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.side=e,this.shaderKey=`search_sorted_${e}`}getUserCode(){return`
      fn findBound(batch: i32, value: f32) -> i32 {
        var left = i32(0);
        var right = uniforms.numInputs;
        while (left < right) {
          var mid = (left + right) / 2;
          if (getSortedSequence(batch, mid) ${this.side==="left"?"<":"<="} value) {
            left = mid + 1;
          } else {
            right = mid;
          }
        }
        return right;
      }

      ${y("index")} {
        if (index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let value = getValuesByOutputIndex(index);
          setOutputAtIndexI32(index, findBound(coords[0], value));
        }
      }
    `}}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function wf(s){const{inputs:t,backend:e,attrs:i}=s,{sortedSequence:o,values:r}=t,{side:a}=i,n=new Cf([r.shape[0],r.shape[1]],a),u=[{type:"int32",data:[o.shape[1]]}];return e.runWebGPUProgram(n,[o,r],"int32",u)}const bf={kernelName:wr,backendName:"webgpu",kernelFunc:wf};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class yf{constructor(t,e,i){this.variableNames=["c","a","b"],this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=e,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.cRank=t,this.rank=i,this.shaderKey="select"}getUserCode(){let t,e;if(this.rank>4)throw Error(`Where for rank ${this.rank} is not yet supported`);if(this.rank===1)e="resRC",t="resRC";else{const o=["resRC.x","resRC.y","resRC.z","resRC.w"],r=[],a=[];for(let n=0;n<this.outputShape.length;n++)a.push(`${o[n]}`),n<this.cRank&&r.push(`${o[n]}`);t=r.join(),e=a.join()}return`
      ${y("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          let cVal = getC(${t});
          if (cVal >= 1.0) {
            setOutputAtIndex(index, getA(${e}));
          } else {
            setOutputAtIndex(index, getB(${e}));
          }
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sf(s){const{inputs:t,backend:e}=s,{condition:i,t:o,e:r}=t,a=new yf(i.shape.length,o.shape,o.shape.length);return e.runWebGPUProgram(a,[i,o,r],Se(o.dtype,r.dtype))}const vf={kernelName:br,backendName:"webgpu",kernelFunc:Sf};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const If=L({opType:b.SELU}),kf={kernelName:yr,backendName:"webgpu",kernelFunc:If};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rf=L({opType:b.SIGMOID}),Pf={kernelName:Sr,backendName:"webgpu",kernelFunc:Rf};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const $f=L({opType:b.SIGN}),Df={kernelName:vr,backendName:"webgpu",kernelFunc:$f};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Nf=L({opType:b.SIN}),zf={kernelName:Ir,backendName:"webgpu",kernelFunc:Nf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Af=L({opType:b.SINH}),Ff={kernelName:kr,backendName:"webgpu",kernelFunc:Af};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Lf=L({opType:b.SOFTPLUS}),Ef={kernelName:Rr,backendName:"webgpu",kernelFunc:Lf};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Bf{constructor(t,e,i,o,r,a){this.variableNames=["x"],this.outputShape=[],this.uniforms="",this.workgroupSize=[64,1,1],this.size=!0;const n=new Array(o.length);for(let u=0;u<n.length;u++)n[u]=o[r[u]];this.outputShape=n,this.newDim=r,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.xShape=t,this.paddedXShape=e,this.uniforms+=`reshapedPaddedXShape : ${B(o.length)}, paddedXShapeStrides : ${B(a)}, `,i.map((u,d)=>{this.uniforms+=` pad${d} : vec2<i32>,`}),this.shaderKey=`spaceToBatchND_${r}`}getUserCode(){const t=B(this.outputShape.length),e=Wt(this.newDim);return`
      ${Ae(this.paddedXShape,"PaddedX")}
      ${y("index")} {
        if(index < uniforms.size) {
          let coords = getCoordsFromIndex(index);
          let switchedIndex = getIndexFromCoords${this.outputShape.length}D(${t}(${e}), uniforms.reshapedPaddedXShape);
          let paddedCoords = getPaddedXCoordsFromIndex(switchedIndex);
          ${os(this.xShape,!0)}
        }
      }
    `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _f=s=>{const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{blockShape:r,paddings:a}=i;E(o.shape.length<=4,()=>"spaceToBatchND for rank > 4 with a WebGPU backend not implemented yet");const n=r.reduce((C,w)=>C*w),u=[[0,0]];u.push(...a);for(let C=1+r.length;C<o.shape.length;++C)u.push([0,0]);const d=u.map((C,w)=>C[0]+o.shape[w]+C[1]),l=Nt(d,r,n,!1),h=zt(l.length,r.length,!1),c=At(d,r,n,!1),p=ye(d),f=new Bf(o.shape,d,u,l,h,p.length),m=[{type:"int32",data:l},{type:"int32",data:p}];u.map(C=>m.push({type:"int32",data:[C[0],C[1]]}));const g=e.runWebGPUProgram(f,[o],o.dtype,m),x=R({inputs:{x:g},backend:e,attrs:{shape:c}});return e.disposeData(g.dataId),x},Wf={kernelName:Pr,backendName:"webgpu",kernelFunc:_f};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Tf{constructor(t,e,i){this.variableNames=["input","indices","segmentIds"],this.outputShape=[],this.uniforms="segmentSize : i32, sparseSize : i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=t,this.type=i,this.dispatchLayout=I([e]),this.dispatch=S(this.dispatchLayout,[e],this.workgroupSize),this.shaderKey="sparseSegmentSum"}getUserCode(){return`
    ${y("index")} {
      if (index < uniforms.sparseSize) {
        let indexInSegmentIds = index / uniforms.segmentSize;
        let indexInSegment = index % uniforms.segmentSize;
        let indexInInput = indices[indexInSegmentIds];
        let segmentId = segmentIds[indexInSegmentIds];

        let value = input[indexInInput * uniforms.segmentSize + indexInSegment];
        let outIndex = segmentId * uniforms.segmentSize + indexInSegment;
        ${te("&result[outIndex]","value",this.type)}
      }
    }
  `}}class Vf{constructor(t,e){this.variableNames=["segmentIds"],this.outputShape=[],this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=[t],this.dispatchLayout=I(e),this.dispatch=S(this.dispatchLayout,e,this.workgroupSize),this.shaderKey="sparseSegmentIdCountProgram"}getUserCode(){return`
    ${y("index")} {
      if (index < uniforms.segmentIdsShape) {
        let segmentId = segmentIds[index];
        ${te("&result[segmentId]","1","int32")}
      }
    }
  `}}class Uf{constructor(t,e){this.variableNames=["segmentSum","sameSegmentIdCount"],this.outputShape=[],this.uniforms="segmentSize : i32",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.type=e,this.dispatchLayout=I(t),this.dispatch=S(this.dispatchLayout,t,this.workgroupSize),this.shaderKey="sparseSegmentMean"}getUserCode(){return`
    ${y("index")} {
      if (index < uniforms.size) {
        let segmentId = index / uniforms.segmentSize;
        let count = sameSegmentIdCount[segmentId];
        if (count != 0) {
          ${this.type==="float32"?"setOutputAtIndex(index, segmentSum[index] / f32(count));":"setOutputAtIndexI32(index, segmentSum[index] / count);"}
        }
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function is(s,t,e,i=!1,o){const a=N(s.shape)/s.shape[0],n=s.dtype,u=N(t.shape),d=o.readSync(e.dataId),h=u>0?d[u-1]+1:0;let c;const p=s.shape.slice();p[0]=h;const f=u*a,m=X({backend:o,attrs:{shape:p,value:0,dtype:n}});c=new Tf(p,f,n);let g=[{type:"int32",data:[a]},{type:"int32",data:[f]}];const x=o.runWebGPUProgram(c,[s,t,e],n,g,m);if(i)return x;const C=X({backend:o,attrs:{shape:[h],value:0,dtype:"int32"}});c=new Vf(h,e.shape);const w=o.runWebGPUProgram(c,[e],"int32",null,C),v=X({backend:o,attrs:{shape:p,value:0,dtype:n}});c=new Uf(p,n),g=[{type:"int32",data:[a]}];const k=o.runWebGPUProgram(c,[x,w],n,g,v);return o.disposeData(x.dataId),o.disposeData(w.dataId),k}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mf(s){const{inputs:t,backend:e}=s,{data:i,indices:o,segmentIds:r}=t;return is(i,o,r,!1,e)}const Of={kernelName:$r,backendName:"webgpu",kernelFunc:Mf};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gf(s){const{inputs:t,backend:e}=s,{data:i,indices:o,segmentIds:r}=t;return is(i,o,r,!0,e)}const Hf={kernelName:Dr,backendName:"webgpu",kernelFunc:Gf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xf{constructor(t,e){this.variableNames=["A"],this.workgroupSize=[64,1,1],this.size=!0;const i=new Array(t.length);for(let o=0;o<i.length;o++)i[o]=t[o]*e[o];this.outputShape=i,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.rank=this.outputShape.length,this.shaderKey="tile"}getUserCode(){const t=Kf(this.rank,"uniforms.");return`
      ${y("index")} {
        if (index < uniforms.size) {
          let resRC = getCoordsFromIndex(index);
          setOutputAtIndex(index, getA(${t}));
        }
      }
    `}}function Kf(s,t=""){if(s>=5)throw Error(`Tile for rank ${s} is not yet supported`);if(s===1)return`(resRC % ${t}aShape)`;const e=["resRC.x","resRC.y","resRC.z","resRC.w"],i=[];for(let o=0;o<s;o++)i.push(`(${e[o]} % ${t}aShape[${o}])`);return i.join()}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ut(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{reps:r}=i;if(e.shouldExecuteOnCPU([o])||o.dtype==="string"||o.shape.length>=5){const u=e.readSync(o.dataId),d=o.dtype==="string"?u.map(c=>Ye(c)):u,l=he(o.shape,o.dtype,d),h=Eu(l,r);return e.makeTensorInfo(h.shape,h.dtype,h.values)}const a=new Xf(o.shape,r);return e.runWebGPUProgram(a,[o],o.dtype)}const qf={kernelName:Nr,backendName:"webgpu",kernelFunc:ut};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yf(s){const{inputs:t,backend:e,attrs:i}=s,{sparseIndices:o,sparseValues:r,defaultValue:a}=t,{outputShape:n}=i,{sliceRank:u,numUpdates:d,sliceSize:l,strides:h,outputSize:c}=et(r,o,n),p=!1;if(r.dtype==="string"){const F=e.bufferSync(o),A=e.bufferSync(r),_=Ye(e.readSync(a.dataId)[0]),W=Du(F,A,n,c,l,d,u,h,_,p);return e.makeTensorInfo(n,W.dtype,W.values)}const f=[c/l,l],m=R({inputs:{x:o},backend:e,attrs:{shape:[d,u]}}),g=r.shape.length?R({inputs:{x:r},backend:e,attrs:{shape:[d,l]}}):K({inputs:{x:r},backend:e}),x=g.dtype,C=e.makeTensorInfo([],x,Ar(1,x)),w=R({inputs:{x:a},backend:e,attrs:{shape:Array(f.length).fill(1)}}),v=ut({inputs:{x:w},backend:e,attrs:{reps:f}}),k=N([d,l]),P=[{type:"int32",data:[u]},{type:"int32",data:h},{type:"int32",data:[k]}];switch(d){case 0:break;case 1:{const F=new be([d,l],u,m.shape.length,g.shape.length,h,f,x,p);e.runWebGPUProgram(F,[g,m],x,P,v)}break;default:{const F=new be([d,l],u,m.shape.length,C.shape.length,h,f,x,p);e.runWebGPUProgram(F,[C,m],x,P,v)}{const F=new be([d,l],u,m.shape.length,g.shape.length,h,f,x);e.runWebGPUProgram(F,[g,m],x,P,v)}}const D=R({inputs:{x:v},backend:e,attrs:{shape:n}});return e.disposeData(m.dataId),e.disposeData(g.dataId),e.disposeData(w.dataId),e.disposeData(C.dataId),e.disposeData(v.dataId),D}const jf={kernelName:zr,backendName:"webgpu",kernelFunc:Yf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qf(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{numOrSizeSplits:r,axis:a}=i,n=re(a,o.shape)[0],u=Lr(o,r,n),d=o.shape.length,l=new Array(d).fill(0),h=o.shape.slice();return u.map(c=>{const p=[...h];p[n]=c;const f=ge({inputs:{x:o},backend:e,attrs:{begin:l,size:p}});return l[n]+=c,f})}const Zf={kernelName:Fr,backendName:"webgpu",kernelFunc:Qf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jf=L({opType:b.SQRT}),em={kernelName:Er,backendName:"webgpu",kernelFunc:Jf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tm={kernelName:Br,backendName:"webgpu",kernelFunc:({inputs:s,backend:t})=>{const{x:e}=s,i=t,o=new me(e.shape,b.SQUARE);return i.runWebGPUProgram(o,[e],e.dtype)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const sm=U({opType:$.SQUARED_DIFFERENCE}),om={kernelName:_r,backendName:"webgpu",kernelFunc:sm};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function im({inputs:s,attrs:t,backend:e}){const{x:i}=s,o=new me(i.shape,b.STEP,"stepAlpha : f32,"),r=[{type:"float32",data:[t.alpha]}];return e.runWebGPUProgram(o,[i],i.dtype,r)}const rm={kernelName:Wr,backendName:"webgpu",kernelFunc:im};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class am{constructor(t){this.variableNames=["x"],this.workPerThread=1,this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize,[this.workPerThread,1,1]);const e=B(this.outputShape.length);this.uniforms=`begin : ${e},  strides : ${e}, `,this.shaderKey="stridedSlice"}getUserCode(){const t=this.outputShape.length;let e="";if(t===1)e="coords * uniforms.strides + uniforms.begin";else{let o=0;e=this.outputShape.map((r,a)=>(o++,this.outputShape.length===1?`coords * uniforms.strides[${a}] + uniforms.begin[${a}]`:`coords[${o-1}] * uniforms.strides[${a}] + uniforms.begin[${a}]`)).join(",")}return`
       ${y("index")} {
         if (index < uniforms.size) {
           let coords = getCoordsFromIndex(index);
           setOutputAtIndex(index, getX(${e}));
         }
       }
     `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nm(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{begin:r,end:a,strides:n,beginMask:u,endMask:d,ellipsisMask:l,newAxisMask:h,shrinkAxisMask:c}=i,{finalShapeSparse:p,finalShape:f,isIdentity:m,sliceDim0:g,isSimpleSlice:x,begin:C,end:w,strides:v}=Vr(o.shape,r,a,n,u,d,l,h,c);let k;if(m)k=R({inputs:{x:o},backend:e,attrs:{shape:f}});else if(g||x){E(o.shape.length>=1,()=>`Input must have rank at least 1, got: ${o.shape.length}`);const P=Ur(C,w,v),D=ge({inputs:{x:o},backend:e,attrs:{begin:C,size:P}});k=R({inputs:{x:D},backend:e,attrs:{shape:f}}),e.disposeData(D.dataId)}else if(e.shouldExecuteOnCPU([o])){const D=e.readSync(o.dataId),F=he(o.shape,o.dtype,D),A=Au(p,F,v,C);k=e.makeTensorInfo(f,o.dtype,A.values)}else{const D=new am(p),F=[{type:"int32",data:C},{type:"int32",data:v}],A=e.runWebGPUProgram(D,[o],o.dtype,F);k=R({inputs:{x:A},backend:e,attrs:{shape:f}}),e.disposeData(A.dataId)}return k}const um={kernelName:Tr,backendName:"webgpu",kernelFunc:nm};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dm(s){const{inputs:t,backend:e,attrs:i}=s,{separator:o,nGramWidths:r,leftPad:a,rightPad:n,padWidth:u,preserveShortSequences:d}=i,{data:l,dataSplits:h}=t,c=e.readSync(l.dataId),p=e.readSync(h.dataId),[f,m]=Fu(c,p,o,r,a,n,u,d);return[e.makeTensorInfo([f.length],"string",f),e.makeTensorInfo(h.shape,"int32",m)]}const lm={kernelName:Mr,backendName:"webgpu",kernelFunc:dm};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cm=U({opType:$.SUB,cpuKernelImpl:Lu,supportsComplex:!0}),hm={kernelName:Or,backendName:"webgpu",kernelFunc:cm};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const pm=L({opType:b.TAN}),fm={kernelName:Gr,backendName:"webgpu",kernelFunc:pm};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mm=L({opType:b.TANH}),gm={kernelName:Hr,backendName:"webgpu",kernelFunc:mm};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xm(s){const{inputs:t,backend:e,attrs:i}=s,{tensor:o,indices:r,updates:a}=t,{sliceRank:n,numUpdates:u,sliceSize:d,strides:l,outputSize:h}=et(a,r,o.shape),c=[h/d,d];if(h===0)return e.makeTensorInfo(o.shape,r.dtype);const p=[],f=R({inputs:{x:r},backend:e,attrs:{shape:[u,n]}});p.push(f);const m=R({inputs:{x:a},backend:e,attrs:{shape:[u,d]}});p.push(m);const g=R({inputs:{x:o},backend:e,attrs:{shape:c}});p.push(g);const x=ut({inputs:{x:g},backend:e,attrs:{reps:Array(c.length).fill(1)}}),C=new be([u,d],n,f.shape.length,m.shape.length,l,c,o.dtype,!1),w=N([u,d]),v=[{type:"int32",data:[n]},{type:"int32",data:l},{type:"int32",data:[w]}],k=e.runWebGPUProgram(C,[m,f],g.dtype,v,x);p.push(k);const P=R({inputs:{x:k},backend:e,attrs:{shape:o.shape}});return p.forEach(D=>e.disposeData(D.dataId)),P}const Cm={kernelName:Xr,backendName:"webgpu",kernelFunc:xm};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class wm{constructor(t){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms=`inputSize : i32, firstPass : i32, negativeInf : f32,
        dir : i32, inc : i32,`,this.shaderKey="swap"}getUserCode(){return`
        ${y("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // We compare elements pair-wise within a group of size 2 * inc.
            // The comparing rule for each group alternates between ascending
            // and descending. Within each group, we compare each pair at
            // positions i and i+inc. To decide whether an element at position i
            // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
            // inc, it is in the first half of the group, we denote it as x0,
            // otherwise we denote it as x1.
            // For example, as shown in the Bitonic top K paper referenced
            // above, Figure5(a) shows that element[1] is in the second half of
            // the group when group size is 2, but it is in the first half of
            // the group when group size is 4.
            let isFirstInPair = elemIdx % (2 * uniforms.inc) < uniforms.inc;
            var i = 0;
            if (isFirstInPair) {
              i = elemIdx;
            } else {
              i = elemIdx - uniforms.inc;
            }

            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }

            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.inc;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.inc));
            }

            var x0 = f32(0.0);
            var x1 = f32(0.0);
            if (i0 < uniforms.inputSize) {
              x0 = getX(batch, i0);
            } else {
              x0 = uniforms.negativeInf;
            }
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = uniforms.negativeInf;
            }

            let reverse = elemIdx % (2 * uniforms.dir) >= uniforms.dir;
            let isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
            if (reverse == isGreater) {
              // Elements in opposite order of direction
              let iTemp = i0;
              i0 = i1;
              i1 = iTemp;
            }
            if (isFirstInPair) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}class bm{constructor(t){this.variableNames=["x","indices"],this.workgroupSize=[256,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.uniforms="inputSize : i32, firstPass : i32, k : i32,",this.shaderKey="merge"}getUserCode(){return`
        ${y("index")} {
          if (index < uniforms.size) {
            let outC = getCoordsFromIndex(index);
            let batch = outC[0];
            let elemIdx = outC[1];
            // The output size is half of the previous size.
            // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _
            // (k=4), we only need to output the indices at positions |, the
            // indices at positions _ can be thrown away, see Figure5(b) After
            // Phase 2 (Merge phase) in the Bitonic Top K paper referenced
            // above.
            // For example, the paper shows we only need to output the orange
            // bars. The output sequence should look like this | | | | | | | |.
            // Because the sequence is halved, to map the output index back to
            // the previous sequence to find the corresponding value, we need
            // to double the index. When we double the index, we basically
            // interpolate a position, so 2i looks like
            // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k
            // position of each 2k positions by - elemIdx % k. E.g. for output
            // at index 4,5,6,7, we want to get the corresponding element at
            // original index 8,9,10,11, for output at index 8,9,10,11,
            // we want to get the corresponding element at original index
            // 16,17,18,19, so on and so forth.

            var i = 0;
            if (elemIdx < uniforms.k) {
              i = elemIdx;
            } else {
              i = elemIdx * 2 - elemIdx % uniforms.k;
            }
            var i0 = 0;
            if (uniforms.firstPass == 1) {
              i0 = i;
            } else {
              i0 = i32(getIndices(batch, i));
            }
            var i1 = 0;
            if (uniforms.firstPass == 1) {
              i1 = i + uniforms.k;
            } else {
              i1 = i32(getIndices(batch, i + uniforms.k));
            }

            let x0 = getX(batch, i0);
            var x1 = f32(0.0);
            if (i1 < uniforms.inputSize) {
              x1 = getX(batch, i1);
            } else {
              x1 = x0;
            }

            if (x0 >= x1) {
              setOutputAtIndex(index, f32(i0));
            } else {
              setOutputAtIndex(index, f32(i1));
            }
          }
        }
      `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ce(s,t){t!==null&&s.disposeData(t.dataId)}function Pt(s){let t=1;for(;t<s;)t*=2;return t}function ym(s){const{inputs:t,backend:e,attrs:i}=s,{x:o}=t,{k:r,sorted:a}=i,n=o.shape,u=n[n.length-1];if(e.shouldExecuteOnCPU([o])){const k=e.readSync(o.dataId),[P,D]=Bu(k,n,o.dtype,r,a);return[e.makeTensorInfo(P.shape,P.dtype,P.values),e.makeTensorInfo(D.shape,D.dtype,D.values)]}if(r===0)return n[n.length-1]=0,[e.makeTensorInfo(n,o.dtype,[]),e.makeTensorInfo(n,"int32",[])];if(u===1)return[o,X({attrs:{shape:n,dtype:"int32",value:0},backend:e})];const l=N(n)/u,h=R({inputs:{x:o},attrs:{shape:[l,u]},backend:e}),c=Pt(r),p=Pt(u);let f=null;const m=()=>f===null?[h,h]:[h,f],g=(k,P,D)=>{const F=m(),A=new wm(D),W=[{type:"int32",data:[u]},{type:"int32",data:[f===null?1:0]},{type:"float32",data:[Number.NEGATIVE_INFINITY]},{type:"int32",data:[k]},{type:"int32",data:[P]}],H=f;f=e.runWebGPUProgram(A,F,"int32",W),ce(e,H)};for(let k=1;k<c;k*=2){const P=k*2;for(let D=k;D>=1;D/=2)g(P,D,[l,p])}for(let k=p;k>c;k/=2){const P=m(),D=new bm([l,k/2]),A=[{type:"int32",data:[u]},{type:"int32",data:[f===null?1:0]},{type:"int32",data:[c]}],_=f;f=e.runWebGPUProgram(D,P,"int32",A),ce(e,_);const W=c/2,H=W*2;for(let O=W;O>=1;O/=2)g(H,O,f.shape)}let x=f;f=ge({inputs:{x:f},backend:e,attrs:{begin:0,size:[l,r]}}),ce(e,x);let C=Jt({inputs:{x:h,indices:f},backend:e,attrs:{axis:1,batchDims:1}});ce(e,h);const w=n.slice(0,-1);w.push(r),x=f,f=R({inputs:{x:f},attrs:{shape:w},backend:e}),ce(e,x);const v=C;return C=R({inputs:{x:C},attrs:{shape:w},backend:e}),ce(e,v),[C,f]}const Sm={kernelName:Kr,backendName:"webgpu",kernelFunc:ym};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class vm{constructor(t){this.variableNames=["Image","Transforms"],this.uniforms="interpolationModeId : i32, fillModeId : i32, fillValue : f32,",this.workgroupSize=[64,1,1],this.size=!0,this.outputShape=t,this.dispatchLayout=I(this.outputShape),this.dispatch=S(this.dispatchLayout,this.outputShape,this.workgroupSize),this.shaderKey="transform"}getUserCode(){return`
          fn mapCoord(outCoord : f32, len : f32) -> f32{
            var inCoord = outCoord;
            if(uniforms.fillModeId == 2) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  if (inCoord < sz2) {
                    inCoord = sz2 * f32(i32(f32(-inCoord / sz2))) +
                    inCoord;
                  }
                  if (inCoord < -len) {
                    inCoord = inCoord + sz2;
                  } else {
                    inCoord = -inCoord - 1.0;
                  }
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz2 = 2.0 * len;
                  inCoord = inCoord - sz2 * f32(i32(f32(inCoord / sz2)));
                  if (inCoord >= len) {
                    inCoord = sz2 - inCoord - 1.0;
                  }
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 3) {
              if (inCoord < 0.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord + len * (f32(i32(f32(-inCoord / sz))) + 1.0);
                }
              } else if (inCoord > len - 1.0) {
                if (len <= 1.0) {
                  inCoord = 0.0;
                } else {
                  let sz = len - 1.0;
                  inCoord = inCoord - len * f32(i32(f32(inCoord / sz)));
                }
              }
              return clamp(inCoord, 0.0, len - 1.0);
            } else if (uniforms.fillModeId == 4) {
              return clamp(outCoord, 0.0, len - 1.0);
            }
            return outCoord;
          }
          fn readWithFillValue(batch : i32, coordY : i32, coordX : i32,
            channel : i32) -> f32 {
            var outputValue : f32;
            if (0 <= coordY && coordY < uniforms.imageShape[1] && 0 <= coordX && coordX < uniforms.imageShape[2]) {
                outputValue = getImage(batch, coordY, coordX, channel);
            } else {
              outputValue = uniforms.fillValue;
            }
            return outputValue;
          }

          ${y("index")} {
            if (index < uniforms.size) {
              let coords = getCoordsFromIndex(index);
              var outputValue : f32;
              let batch = coords[0];
              let x = coords[2];
              let y = coords[1];
              let channel = coords[3];
              let xf = f32(x);
              let yf = f32(y);
              let a1 = getTransforms(batch, 0);
              let a2 = getTransforms(batch, 1);
              let a3 = getTransforms(batch, 2);
              let b1 = getTransforms(batch, 3);
              let b2 = getTransforms(batch, 4);
              let b3 = getTransforms(batch, 5);
              let c1 = getTransforms(batch, 6);
              let c2 = getTransforms(batch, 7);
              let projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = uniforms.fillValue;
              } else {
                let inX = (a1 * xf + a2 * yf + a3) / projection;
                let inY = (b1 * xf + b2 * yf + b3) / projection;
                let mapX = mapCoord(inX, f32(uniforms.imageShape[2]));
                let mapY = mapCoord(inY, f32(uniforms.imageShape[1]));

                if (uniforms.interpolationModeId == 1) {
                  let coordY = i32(round(mapY));
                  let coordX = i32(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  let yFloor = floor(mapY);
                  let xFloor = floor(mapX);
                  let yCeil = yFloor + 1.0;
                  let xCeil = xFloor + 1.0;
                  let valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yFloor), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yFloor), i32(xCeil), channel);
                  let valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, i32(yCeil), i32(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, i32(yCeil), i32(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutputAtIndex(index, outputValue);
            }
          }
        `}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Im(s){const{inputs:t,backend:e,attrs:i}=s,{image:o,transforms:r}=t,{interpolation:a,fillMode:n,fillValue:u,outputShape:d}=i,[l,h,c,p]=o.shape,[f,m]=d??[h,c],g=[l,f,m,p],x=new vm(g),C=a==="nearest"?1:2;let w;switch(n){case"constant":w=1;break;case"reflect":w=2;break;case"wrap":w=3;break;case"nearest":w=4;break;default:w=1;break}const v=[{type:"int32",data:[C]},{type:"int32",data:[w]},{type:"float32",data:[u]}];return e.runWebGPUProgram(x,[o,r],"float32",v)}const km={kernelName:qr,backendName:"webgpu",kernelFunc:Im};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rm(s){const{inputs:t,backend:e,attrs:i}=s,{value:o}=t;let{axis:r}=i;r<0&&(r+=o.shape.length);const a=o,n=a.shape.length,u=o.shape[r],d=new Array(n-1);let l=0;for(let m=0;m<n;m++)m!==r&&(d[l++]=a.shape[m]);const h=[],c=new Array(n).fill(0),p=a.shape.slice();p[r]=1;const f=new Array(u);for(let m=0;m<f.length;m++){c[r]=m;const g=ge({inputs:{x:a},backend:e,attrs:{begin:c,size:p}}),x=R({inputs:{x:g},backend:e,attrs:{shape:d}});f[m]=x,h.push(g)}return h.forEach(m=>e.disposeData(m.dataId)),f}const Pm={kernelName:Yr,backendName:"webgpu",kernelFunc:Rm};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class $m{constructor(t,e,i){if(this.outputShape=[],this.variableNames=["x","segmentIds"],this.uniforms="numSegments : i32, xSize: i32,",this.workgroupSize=[64,1,1],this.atomic=!0,this.outputShape=e,this.dispatchLayout=I(t),this.dispatch=S(this.dispatchLayout,t,this.workgroupSize),i!=="float32"&&i!=="int32")throw new Error(`UnsortedSegmentSum only supports float32 and int32
              types, does not support ${i} type.`);this.type=i,this.shaderKey="unsortedSegmentSum"}getUserCode(){return`
    ${y("index")} {
      if (index < uniforms.xSize) {
        let coords = getXCoordsFromIndex(index);
        let b = coords[0];
        let inCol = coords[1];

        let segmentId = i32(getSegmentIds(inCol));
        if (segmentId >= 0) {
          let flatIndex = b * uniforms.numSegments + segmentId % uniforms.numSegments;
          let value = getX(b, inCol);

          ${te("&result[flatIndex]","value",this.type)}
        }
      }
    }
  `}}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dm(s){const{inputs:t,backend:e,attrs:i}=s,{x:o,segmentIds:r}=t,{numSegments:a}=i,n=o.shape.length,u=[];let d=0;const l=Re([d],n);let h=o;l!=null&&(h=j({inputs:{x:o},backend:e,attrs:{perm:l}}),u.push(h),d=Pe(1,n)[0]);const c=Qr(h.shape,d,a),p=N([h.shape[d]]),f=R({inputs:{x:h},backend:e,attrs:{shape:[-1,p]}});u.push(f);const m=o.dtype,g=[f.shape[0],a],x=X({backend:e,attrs:{shape:g,value:0,dtype:m}}),C=new $m(f.shape,g,m),w=[{type:"int32",data:[a]},{type:"int32",data:[N(f.shape)]}],v=e.runWebGPUProgram(C,[f,r],m,w,x),k=R({inputs:{x:v},backend:e,attrs:{shape:c}});u.push(v);let P=k;if(l!=null){u.push(k);const D=Ft(l);P=j({inputs:{x:P},backend:e,attrs:{perm:D}})}return u.forEach(D=>e.disposeData(D.dataId)),P}const Nm={kernelName:jr,backendName:"webgpu",kernelFunc:Dm};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zm=[tu,Tu,Uu,Ou,Hu,qu,td,od,rd,nd,dd,cd,pd,md,xd,Sd,Id,$d,Nd,Ad,_d,Ud,Gd,qd,jd,el,ou,ol,nl,ml,yl,kl,$l,Nl,Al,Ll,Bl,Tl,Ul,Ol,Hl,ql,tc,oc,Ql,ac,dc,pc,mc,Cc,Sc,Ic,Rc,$c,Nc,Ac,Fc,Ec,_c,Zn,Tc,Hc,Uc,Oc,qc,jc,Zc,th,ih,ah,uh,su,lh,rl,hh,fh,gh,Ch,bh,Sh,kh,Dh,Ph,zh,Fh,Eh,Th,Mh,wd,Gh,Xh,ep,qh,Zh,sp,bd,ip,ap,up,lp,mp,wc,xp,wp,yp,Hd,Ip,Rp,$p,zp,Fp,Ep,_p,Tp,Xd,Up,Op,Hp,Kp,Jn,jp,Jp,sf,af,df,cf,pf,mf,xf,bf,vf,kf,Pf,Df,zf,Ff,Ed,rm,um,lm,pp,Ef,Wf,Of,Hf,jf,Zf,em,tm,om,hm,bc,fm,gm,Cm,qf,Sm,km,Qu,Pm,Nm,kp];for(const s of zm)Zr(s);export{_e as WebGPUBackend,Fm as webgpu_util};
