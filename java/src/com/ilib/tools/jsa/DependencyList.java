/*
 * DependencyTree.java - 
 * 
 * Copyright © 2012, JEDL Software, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.ilib.tools.jsa;

import java.util.ArrayList;

/**
 * DependencyTree
 * 
 * @author edwin
 */
public class DependencyList
{
    protected String name;
    
    public DependencyList(String path) 
    {
        name = path;
    }
    
    public String getName()
    {
        return name;
    }
    
    public void addDependency(DependencyList node) 
    {

    }
    
    public ArrayList<DependencyList> getDependencies() 
    {
        return null;
    }
}
