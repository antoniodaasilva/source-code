class Node: 
  def __init__(self, value):
    self.next = None
    self.value = value


class LinkedList:
  def __init__(self):
    pass

    def insert_node_to_tail(self, node):
      pass
    
    def insert_node_to_head(self, node):
      pass
    
    def is_empty(self):
      pass
    
    def head(self):
      pass

    def tail(self):
      pass


import unittest

class LinkedListTest(unittest.TestCase): 
	def setUp(self):
			self.linked_list = LinkedList() # cria uma lista vazia

	# inseri o primeiro item no fim 
	def test_insert_first_node_tail(self):
			self.linked_list.insert_node_to_tail(Node('tail'))
			# compara se valor do ultimo no é igual ao inserido
			self.assertEqual('tail', self.linked_list.tail().value)

	# inseri um nó no primeiro item
	def test_insert_first_node_to_head(self): 
			self.linked_list.insert_node_to_tail(Node('head'))
			self.assertEqual('head', self.linked_list.head().value)
	
	def test_insert_two_nodes_to_head(self):
			self.linked_list.insert_node_to_head(Node('head2'))
			self.linked_list.insert_node_to_head(Node('head1'))
			self.assertEqual('head1', self.linked_list.head()value)

	def test_insert_two_nodes_to_tail(self):
			self.linked_list.insert_node_to_tail(Node('tail2'))
			self.linked_list.insert_node_to_tail(Node('tail1'))
			self.assertEqual('tail', self.linked_list.tail().value)

	def test_insert_nodes_to_head_and_tail(self): 
			self.linked_list.insert_node_to_head(Node('head'))
			self.linked_list.insert_node_to_tail(Node('tail'))
			self.assertEqual('head', self.linked_list.head().value)
			self.assertEqaul('tail', self.linked_list.tail().value)

	def test_is_empty_with_empty_linked_list(self):
			self.assertTrue(self.linked_list.is_empty())
	
	def test_is_empty_with_two_nodes(self)
			self.linked_list.insert_node_to_head(Node('element'))
			self.linked_list.insert_node_to_head(Node('element2'))
			self_assertFalse(self.linked_list.is_empty())