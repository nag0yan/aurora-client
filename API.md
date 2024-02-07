# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SimpleAuroraClient <a name="SimpleAuroraClient" id="aurora-client.SimpleAuroraClient"></a>

#### Initializers <a name="Initializers" id="aurora-client.SimpleAuroraClient.Initializer"></a>

```typescript
import { SimpleAuroraClient } from 'aurora-client'

new SimpleAuroraClient(scope: Construct, id: string, props: ISimpleAuroraClientProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aurora-client.SimpleAuroraClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#aurora-client.SimpleAuroraClient.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#aurora-client.SimpleAuroraClient.Initializer.parameter.props">props</a></code> | <code><a href="#aurora-client.ISimpleAuroraClientProps">ISimpleAuroraClientProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="aurora-client.SimpleAuroraClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="aurora-client.SimpleAuroraClient.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="aurora-client.SimpleAuroraClient.Initializer.parameter.props"></a>

- *Type:* <a href="#aurora-client.ISimpleAuroraClientProps">ISimpleAuroraClientProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aurora-client.SimpleAuroraClient.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="aurora-client.SimpleAuroraClient.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#aurora-client.SimpleAuroraClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="aurora-client.SimpleAuroraClient.isConstruct"></a>

```typescript
import { SimpleAuroraClient } from 'aurora-client'

SimpleAuroraClient.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="aurora-client.SimpleAuroraClient.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aurora-client.SimpleAuroraClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="aurora-client.SimpleAuroraClient.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### ISimpleAuroraClientProps <a name="ISimpleAuroraClientProps" id="aurora-client.ISimpleAuroraClientProps"></a>

- *Implemented By:* <a href="#aurora-client.ISimpleAuroraClientProps">ISimpleAuroraClientProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#aurora-client.ISimpleAuroraClientProps.property.dbInstanceType">dbInstanceType</a></code> | <code>aws-cdk-lib.aws_ec2.InstanceType</code> | *No description.* |
| <code><a href="#aurora-client.ISimpleAuroraClientProps.property.engine">engine</a></code> | <code>aws-cdk-lib.aws_rds.IClusterEngine</code> | *No description.* |
| <code><a href="#aurora-client.ISimpleAuroraClientProps.property.vpc">vpc</a></code> | <code>aws-cdk-lib.aws_ec2.IVpc</code> | *No description.* |

---

##### `dbInstanceType`<sup>Required</sup> <a name="dbInstanceType" id="aurora-client.ISimpleAuroraClientProps.property.dbInstanceType"></a>

```typescript
public readonly dbInstanceType: InstanceType;
```

- *Type:* aws-cdk-lib.aws_ec2.InstanceType

---

##### `engine`<sup>Required</sup> <a name="engine" id="aurora-client.ISimpleAuroraClientProps.property.engine"></a>

```typescript
public readonly engine: IClusterEngine;
```

- *Type:* aws-cdk-lib.aws_rds.IClusterEngine

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="aurora-client.ISimpleAuroraClientProps.property.vpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* aws-cdk-lib.aws_ec2.IVpc

---

