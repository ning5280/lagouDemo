1. ���ļ����貿��

2. �Ȱ�װ package.json �е�nodeģ��

������Ҫȫ�ְ�װ gulp���� 

npm i -g gulp

3. Ȼ��װ bower.json �е�ģ��

bower install 

��Ҫȫ�ְ�װbower

npm i -g bower 


4. ����ʱ��Ҫ���� gulp ����

�������벢��ʵ�б���

gulp

5. srcĿ¼�е� data �ļ���Ϊ�����ݣ�ֱ�ӷ��õ���Ŀ�� src Ŀ¼���ɡ�

6. ���������http://localhost:1234/

����gulp������ɺϲ�����ļ������ļ��ʴ���������ļ�������û��hashֵ�����¸ò��û��Ч����
��ʱ�Ľ���������޸�Դ�룬��ʹ��hash�㷨��ֱ��ʹ��ʱ�����Ϊ�汾�š�
������

try {
         data = fs.readFileSync(dependencyPath);
         hash = crypto.createHash('md5');
         hash.update(data.toString(), 'utf8');
          var _rev=new Date().getTime();
          line = line.replace(groups[2], _rev);
        }
�޸�Ϊ

 try {
          var _rev=new Date().getTime();
          line = line.replace(groups[2], _rev);
        }
����