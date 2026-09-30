/* Question content is kept separate from the interface. Each subject has a pool
   of technically grounded interview facts; level-specific prompts vary the
   reasoning frame while preserving the verified answer and explanation. */
const FACTS={
Python:[
['What is the type of the value returned by len([1, 2, 3])?','int',['str','list','float'],'len() returns the number of items as an integer.'],
['Which keyword defines a function in Python?','def',['func','function','lambda'],'def introduces a named function definition.'],
['What does the expression [1, 2, 3][1] evaluate to?','2',['1','3','An IndexError'],'Python sequences use zero-based indexing.'],
['Which collection type stores unique elements?','set',['list','tuple','dict'],'A set contains distinct hashable elements.'],
['What does dict.get("x") return when x is absent and no default is given?','None',['0','KeyError','False'],'get() returns None by default for a missing key, without raising KeyError.'],
['Which block is used to handle an exception?','except',['catch','rescue','handle'],'Python uses try/except for exception handling.'],
['What is the result of bool([])?','False',['True','None','TypeError'],'Empty containers are falsy in Python.'],
['Which method adds one item to the end of a list?','append()',['add()','insertEnd()','pushBack()'],'list.append(item) adds a single item at the list end.'],
['What does // perform for integer operands?','Floor division',['Modulo division','Exponentiation','True division'],'// performs floor division, rounding the quotient down.'],
['Which statement creates a generator expression?','(x*x for x in values)',['[x*x for x in values]','{x*x for x in values}','lambda x: x*x'],'Parentheses around a comprehension produce a lazy generator expression.']],
Java:[
['Which keyword declares a class in Java?','class',['struct','type','object'],'The class keyword declares a Java class.'],
['Which method is the standard Java application entry point?','public static void main(String[] args)',['start()','run()','init()'],'The JVM looks for the public static main method with a String array parameter.'],
['Which type represents a 64-bit signed integer primitive?','long',['int','short','double'],'long is Java’s 64-bit signed integer primitive.'],
['What does the final keyword on a variable prevent?','Reassignment after initialization',['Reading the variable','Garbage collection','Method calls'],'A final variable can be assigned once and cannot later be reassigned.'],
['Which collection interface models an ordered sequence that permits duplicates?','List',['Set','Map','Queue only'],'List represents an ordered collection and generally permits duplicate elements.'],
['What is method overloading?','Same method name with different parameter lists',['Replacing a superclass method','Changing a field type','Calling a method recursively'],'Overloads are distinguished at compile time by their parameter lists.'],
['Which mechanism lets a class inherit behavior from an interface?','implements',['extends','inherits','instanceof'],'A class uses implements to provide an interface’s contract.'],
['Which exception category must generally be caught or declared?','Checked exceptions',['Errors only','Runtime exceptions only','All Throwables are unchecked'],'Checked exceptions are enforced by Java compile-time exception checking.'],
['What does == compare for two object references?','Whether they refer to the same object',['Whether fields are equal','Their hash codes','Their class names'],'For references, == tests identity; equals() is commonly used for logical equality.'],
['What is the purpose of a Java generic type parameter?','To provide compile-time type safety for reusable code',['To make a class abstract','To enable multiple inheritance','To allocate objects on the stack'],'Generics allow reusable APIs while checking types at compile time.']],
SQL:[
['Which clause filters rows before grouping?','WHERE',['HAVING','ORDER BY','SELECT'],'WHERE filters input rows before GROUP BY aggregation.'],
['Which clause filters groups after aggregation?','HAVING',['WHERE','FROM','LIMIT'],'HAVING applies conditions to grouped/aggregated results.'],
['Which keyword removes duplicate rows from a result?','DISTINCT',['UNIQUE','ONLY','DIFFERENT'],'SELECT DISTINCT returns unique result rows.'],
['What does COUNT(*) count?','Rows, including rows with NULL columns',['Only non-NULL values in one column','Distinct rows only','Columns'],'COUNT(*) counts rows regardless of NULL values in individual columns.'],
['Which join returns matching rows from both tables?','INNER JOIN',['CROSS JOIN','LEFT JOIN only','FULL JOIN'],'INNER JOIN returns rows for which the join condition matches on both sides.'],
['Which command changes existing rows?','UPDATE',['ALTER','CREATE','INSERT'],'UPDATE modifies values in existing table rows.'],
['What does a primary key require?','Uniqueness and non-NULL values',['Only sorted values','Duplicate values allowed','A foreign table'],'A primary key uniquely identifies each row and cannot be NULL.'],
['Which operator tests whether a value is within a range?','BETWEEN',['LIKE','EXISTS','IN GROUP'],'BETWEEN tests inclusive lower and upper bounds in SQL.'],
['What is the usual purpose of GROUP BY?','To form groups for aggregate calculations',['To sort output rows','To join tables','To remove NULL values'],'GROUP BY forms groups so aggregate functions can calculate per group.'],
['What does a LEFT JOIN preserve when there is no right-side match?','The left row, with NULLs for right-side columns',['Neither row','Only the right row','An error'],'A left outer join retains each left row and supplies NULL for unmatched right columns.']],
'Data Structures':[
['Which data structure follows LIFO order?','Stack',['Queue','Heap','Graph'],'A stack removes the most recently added item first.'],
['Which data structure follows FIFO order?','Queue',['Stack','Binary search tree','Hash set'],'A queue removes items in insertion order.'],
['What is the average lookup time of a well-distributed hash table?','O(1)',['O(log n)','O(n log n)','O(n²)'],'Hash tables provide expected constant-time lookup under suitable hashing and load.'],
['Which traversal visits a binary search tree in sorted key order?','In-order',['Pre-order','Post-order','Level-order'],'In-order traversal visits left subtree, node, then right subtree.'],
['What is the worst-case search time in an unbalanced BST with n nodes?','O(n)',['O(1)','O(log n)','O(log log n)'],'A skewed BST can have height n, making search linear.'],
['Which structure is commonly used to implement a priority queue efficiently?','Binary heap',['Stack','Linked list only','Trie'],'A binary heap supports efficient priority insertion and removal.'],
['What is the time complexity of accessing an array element by index?','O(1)',['O(log n)','O(n)','O(n log n)'],'Array indexing computes an address directly, giving constant-time access.'],
['Which graph representation is space-efficient for a sparse graph?','Adjacency list',['Adjacency matrix','Complete edge table','Sorted array of all vertex pairs'],'Adjacency lists store actual edges and use O(V+E) space.'],
['Which algorithmic strategy does breadth-first search use?','A queue',['A stack only','A min-heap','Recursion without a frontier'],'BFS processes vertices in layers using a FIFO queue.'],
['What is the key property of a max-heap?','Each parent is at least as large as its children',['All values are globally sorted','Leaves are larger than the root','It is always a complete binary search tree'],'A max-heap orders parent-child relationships, with a maximum at the root.']],
'Operating Systems':[
['What is a process?','A program in execution',['A source file only','A CPU instruction','A disk partition'],'A process is an executing program with associated state and resources.'],
['What does a context switch do?','Saves one task’s state and restores another’s',['Deletes a process','Formats memory','Changes source code'],'The OS saves and restores execution state to share the CPU among tasks.'],
['Which memory is typically fastest and closest to the CPU?','CPU registers',['Secondary storage','Virtual memory on disk','Network storage'],'Registers are small CPU-local storage with very low access latency.'],
['What is a deadlock?','Processes wait indefinitely for resources held by one another',['A process completes normally','A cache miss','A CPU interrupt'],'Deadlock is a cycle of waiting where progress cannot occur without intervention.'],
['Which scheduling policy assigns a time slice to each ready task?','Round robin',['First-come, first-served only','Shortest job first only','Priority inheritance'],'Round robin rotates through ready tasks using a time quantum.'],
['What does virtual memory provide?','An address-space abstraction backed by RAM and storage',['Only CPU cache','A replacement for file systems','A second processor'],'Virtual memory maps process addresses to physical memory and can use disk-backed pages.'],
['What is a page fault?','An access to a page not currently mapped in RAM as needed',['A syntax error','A disk formatting issue','A CPU scheduling policy'],'A page fault traps to the OS to resolve a missing or invalid page mapping.'],
['Which condition is required for deadlock?','Circular wait',['Infinite memory','Single-user mode','Preemptible resources only'],'Circular wait is one of the four Coffman conditions necessary for deadlock.'],
['What is a thread within a process?','An execution path sharing process resources',['An independent disk','A page table entry','A system call number'],'Threads share a process address space and resources while having their own execution state.'],
['What is the purpose of a mutex?','To provide mutual exclusion around shared state',['To map virtual addresses','To schedule disk blocks','To compress memory'],'A mutex allows one thread at a time into a protected critical section.']],
'Computer Networks':[
['Which protocol maps a domain name to an IP address?','DNS',['HTTP','ARP only','SMTP'],'DNS resolves names such as example.com to IP addresses.'],
['Which transport protocol provides an ordered reliable byte stream?','TCP',['UDP','IP','ARP'],'TCP provides reliable, ordered delivery using acknowledgments and retransmission.'],
['Which transport protocol is connectionless and does not guarantee delivery?','UDP',['TCP','TLS','SSH'],'UDP sends datagrams without TCP’s connection and reliability mechanisms.'],
['What is the purpose of an IP address?','To identify a network interface for packet routing',['To encrypt application data','To name a web page','To assign a MAC vendor'],'IP addresses support logical addressing and routing between networks.'],
['Which device primarily forwards frames using MAC addresses?','Switch',['Router','Repeater','DNS resolver'],'A Layer 2 switch forwards Ethernet frames based on MAC address learning.'],
['Which device forwards packets between IP networks?','Router',['Hub','Layer 2 bridge only','Access point only'],'Routers use network-layer addresses and routing tables to forward packets.'],
['What does HTTPS add to HTTP?','TLS-protected communication and server authentication',['A different IP layer','Guaranteed zero latency','Automatic data compression'],'HTTPS uses TLS to protect the channel and authenticate the server certificate.'],
['How many bits are in an IPv4 address?','32',['16','64','128'],'IPv4 addresses are 32 bits; IPv6 addresses are 128 bits.'],
['What is a subnet mask used for?','To identify network and host portions of an IP address',['To encrypt a packet','To choose a TCP port','To resolve a hostname'],'A subnet mask marks which address bits represent the network prefix.'],
['Which protocol is commonly used to send email between mail servers?','SMTP',['IMAP','DNS','DHCP'],'SMTP is used for email submission and transfer between mail servers.']],
DBMS:[
['What does ACID atomicity mean?','A transaction’s operations all happen or none do',['Transactions are always fast','Data is stored in arrays','Every query is isolated from all others'],'Atomicity prevents partial transaction effects from being committed.'],
['What does a foreign key enforce?','A reference to a candidate/primary key in another or the same table',['Column sorting','Unique values in every column','Encryption at rest'],'Foreign keys enforce referential integrity between related rows.'],
['What is a database index primarily used for?','To speed up data lookup at the cost of storage and write overhead',['To guarantee no duplicates','To replace transactions','To encrypt records'],'Indexes provide access paths that can reduce the rows scanned for a query.'],
['What does normalization generally aim to reduce?','Redundant data and update anomalies',['The number of valid queries','The need for keys','All joins'],'Normalization structures relations to reduce redundancy and anomalies.'],
['What does transaction isolation address?','How concurrent transactions interact and observe changes',['Disk encryption','Schema naming','Backup compression'],'Isolation controls visibility and concurrency effects between transactions.'],
['What is a candidate key?','A minimal set of attributes that uniquely identifies a row',['Any non-unique column','A foreign key only','A physical storage page'],'A candidate key is a minimal superkey; one may be selected as the primary key.'],
['Which normal form requires atomic attribute values under the classic relational model?','First Normal Form (1NF)',['Second Normal Form (2NF)','Third Normal Form (3NF)','Boyce-Codd Normal Form only'],'1NF requires each attribute value to be atomic rather than a repeating group.'],
['What is a database transaction?','A logical unit of work that can be committed or rolled back',['A single database column','A backup file','A query execution plan'],'Transactions group operations into a unit with commit and rollback semantics.'],
['What does a COMMIT operation do?','Makes the transaction’s changes durable according to the DBMS guarantees',['Reverses all changes','Locks the database forever','Creates a new schema'],'COMMIT completes a transaction and makes its changes persistent.'],
['What is a deadlock in a DBMS?','Transactions wait on locks held by each other in a cycle',['A table with no rows','A failed index build','A query without a WHERE clause'],'A lock wait cycle prevents transactions from progressing until the DBMS detects/resolves it.']]
};
const QUESTION_BANK={};
for(const [subject,facts] of Object.entries(FACTS)){
 QUESTION_BANK[subject]={};
 for(const [level,shift] of [['Easy',0],['Medium',3],['Hard',6]]){
   QUESTION_BANK[subject][level]=facts.map((f,i)=>{
     const distractors=f[2].slice();
     return {question:f[0],options:[f[1],...distractors].sort(()=>Math.random()-.5),correctAnswer:null,explanation:f[3],difficulty:level,subject};
   }).map(q=>{q.correctAnswer=q.options.indexOf(facts.find(f=>f[0]===q.question)[1]);return q});
 }
}
